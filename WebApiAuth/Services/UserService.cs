using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebApiAuth.Models;

namespace WebApiAuth.Services
{
    public class UserService
    {
        public List<User> GetAll()
        {
            List<User> list = null;
            using (var conn = getConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = "AspNetUser_SelectAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        User u = new User();
                        u.Id = (string)reader["Id"];
                        u.UserName = (string)reader["UserName"];
                        u.Email = (string)reader["Email"];
                        u.EmailConfirmed = (bool)reader["EmailConfirmed"];
                        if(list == null)
                        {
                            list = new List<User>();
                        }
                        list.Add(u);

                    }
                }
            }
            return list;
        }

        SqlConnection getConnection()
        {
            var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
            conn.Open();
            return conn;

        }
    }
}