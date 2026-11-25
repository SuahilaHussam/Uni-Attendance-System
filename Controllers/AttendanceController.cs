
using Microsoft.AspNetCore.Mvc;

namespace UniversityAttendanceSystem.Controllers
{
    public class AttendanceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult QRScanner()
        {
            return View();
        }
    }
}
