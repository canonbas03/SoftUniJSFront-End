function solve(employees = []) {
  const employeeInfoList = employees.map((employeeName) =>
    getEmployeesInfo(employeeName),
  );

  employeeInfoList.forEach(printEmployeeInfo);

  function getEmployeesInfo(name) {
    const info = {
      name,
      personalNumber: name.length,
    };

    return info;
  }

  function printEmployeeInfo(info) {
    console.log(
      `Name: ${info.name} -- Personal Number: ${info.personalNumber}`,
    );
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
