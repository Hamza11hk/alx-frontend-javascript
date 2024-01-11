// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  brand: 'majorCredits';
  credits: number;
}

// Define MinorCredits interface
interface MinorCredits {
  brand: 'minorCredits';
  credits: number;
}

// Create function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: 'majorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

// Create function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: 'minorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
