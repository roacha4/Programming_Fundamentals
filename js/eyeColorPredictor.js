/* 
  This is the JavaScript code for the /aroach4_final/index.html
  "Eye color predictor"
  Written by Anthony Roach for Programming Fundamentals final project.
  Submitted on May 15, 2024
*/
function eyeColorPredictor() {
  // Identify variables
  var firstAllele;
  var secondAllele;
  var genotype;
  var phenotype;

  // Prompt for the alleles
  firstAllele = prompt("What allele does the first parent give? B, b, or G?");
  while (firstAllele !== 'B' && firstAllele !== 'G' && firstAllele !== 'b') {
    alert("Invalid input! Please enter B, b, or G. Case sensitivity required");
    firstAllele = prompt("What allele does the first parent give? B, b, or G?");
  }

  secondAllele = prompt("What allele does the second parent give? B, b, or G?");
  while (secondAllele !== 'B' && secondAllele !== 'G' && secondAllele !== 'b') {
    alert("Invalid input! Please enter B, b, or G. Case sensitivity required");
    secondAllele = prompt("What allele does the second parent give? B, b, or G?");
  }

  // Determine and display genotype
  genotype = firstAllele + secondAllele;
  document.write("The genotype for your eye color is " + genotype + "." + "<br>");

  // Determine phenotype
  switch (genotype) {
    case 'BB':
      phenotype = 'Brown';
      break;
    case 'Bb':
      phenotype = 'Brown';
      break;
    case 'BG':
      phenotype = 'Brown';
      break;
    case 'bB':
      phenotype = 'Brown';
      break;
    case 'GB':
      phenotype = 'Brown';
      break;
    case 'GG':
      phenotype = 'Green';
      break;
    case 'bG':
      phenotype = 'Green';
      break;
    case 'Gb':
      phenotype = 'Green';
      break;
    case 'bb':
      phenotype = 'Blue';
      break;
    default:
      phenotype = 'Unknown';
  }

  // Display phenotype
  document.write("<br>" + "The phenotype for your eye color is " + phenotype + ".");
}

eyeColorPredictor();