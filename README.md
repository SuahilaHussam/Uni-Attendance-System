# AttendFlow – University Attendance System

A web-based University Attendance Management System built with **ASP.NET Core MVC** and **.NET 10**.

AttendFlow provides a clean dashboard interface for managing university projects, team members, and student attendance, with a responsive design and a modern user experience.

## Features

- **Dashboard:** Overview of system statistics and activities.
- **Projects Management:** View, create, and manage projects.
- **Team Members:** Browse and manage team member information.
- **Attendance Management:** View attendance records.
- **QR Code Generator:** Generate a student QR code.
- **QR Code Scanner:** Scan QR codes using the device camera.
- **Kanban Board:** Organize project tasks visually.
- **Responsive Design:** Supports different screen sizes.
- **Dark & Light Modes:** Switch between visual themes.

## Technologies Used

- C#
- ASP.NET Core MVC
- .NET 10
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

## Getting Started

### Prerequisites

Make sure you have installed:

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Visual Studio Code](https://code.visualstudio.com/) or Visual Studio

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SuhailaHussam/Uni-Attendance-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Uni-Attendance-System
   ```

3. Restore dependencies:

   ```bash
   dotnet restore
   ```

4. Run the application:

   ```bash
   dotnet run
   ```

5. Open the local URL displayed in the terminal.

## Project Structure

```text
Uni Attendance/
│
├── Controllers/
├── Models/
├── Views/
│   ├── Shared/
│   ├── Home/
│   ├── Projects/
│   ├── TeamMembers/
│   └── Attendance/
│
├── wwwroot/
│   ├── css/
│   ├── js/
│   └── ...
│
├── Program.cs
└── appsettings.json
```

## Important Notes

- This project currently uses demo data for its frontend features.
- QR code generation and scanning require an internet connection for their external libraries.
- Camera access requires browser permission and a secure context such as HTTPS or localhost.
- This repository contains the application source code. It is not a hosted live website.

## Author

**Suhaila Hussam**

GitHub: [@SuhailaHussam](https://github.com/SuhailaHussam)

---

*AttendFlow – Making University Attendance Management Simpler.*
