using System.Collections.Generic;
using System.Web.Http;
using WebApiAuth.Models;
using WebApiAuth.Services;

namespace WebApiAuth.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        UserService svc = new UserService();

        [HttpGet, Route]
        [Authorize]
        public List<User> GetAll()
        {
            return svc.GetAll();
        }

    }
}
