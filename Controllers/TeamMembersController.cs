
using Microsoft.AspNetCore.Mvc;

namespace UniversityAttendanceSystem.Controllers
{
    public class TeamMembersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details(int id)
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }
    }
}
