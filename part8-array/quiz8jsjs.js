// function dataHandling(input) {
//     // Check if input[1] is a string before using the .replace() method
  
//     // Add new elements to the array
//     input.splice(2, 0, "Provinsi " + input[2]);
  
//     // Check if input[3] is a string before using the .split() method
//     if (typeof input[3] === "string") {
//       const dateParts = input[3].split("/");
//       // Swap the positions of dateParts[0] and dateParts[2]
//       [dateParts[0], dateParts[2]] = [dateParts[2], dateParts[0]];
  
//       // Create a new date format "21-05-1989" using splice
//       const dateFormat = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
  
//       // Truncate the second element to 15 characters
//       input[1] = input[1].substr(0, 15);
  
//       // Replace the month number with "Mei"
//       const monthIndex = parseInt(dateParts[1]) - 1;
//       const months = [
//         "Januari", "Februari", "Maret", "April", "Mei", "Juni",
//         "Juli", "Agustus", "September", "Oktober", "November", "Desember"
//       ];
//       input.splice(5, 0, "Pria");
//       input.splice(6, 0, "SMA Internasional Metro");
//       input.splice(7, 1, months[monthIndex]);
  
//       console.log(input);
//       console.log(months[monthIndex]);
//       console.log(dateParts);
//       console.log(dateFormat);
//     } else {
//       console.log("Invalid date format!");
//     }
//   }
  
//   let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989"];
  
//   dataHandling(input);
  
  