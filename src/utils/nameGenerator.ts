/**
 * Name Generation Utility
 * Generates realistic, diverse names for reviewer anonymization
 */

interface NameMapping {
  oldName: string;
  newName: string;
  demographics: {
    gender?: 'male' | 'female' | 'nonbinary';
    ethnicity?: string;
    ageRange?: string;
  };
  context: string; // Where this person appears (e.g., "case-study-anxiety", "blog-comment")
}

interface NamePool {
  male: {
    first: string[];
    last: string[];
  };
  female: {
    first: string[];
    last: string[];
  };
  neutral: {
    first: string[];
    last: string[];
  };
  last: string[]; // Diverse last names
}

const namePool: NamePool = {
  male: {
    first: [
      'Marcus', 'Jordan', 'Devon', 'Elijah', 'Adrian', 'Cameron', 'Isaac', 'Miles',
      'Kai', 'Leo', 'Oliver', 'Ethan', 'Noah', 'Liam', 'Lucas', 'Mason',
      'James', 'Benjamin', 'Henry', 'Alexander', 'Daniel', 'Matthew', 'Jackson',
      'Sebastian', 'Jayden', 'Xavier', 'Mateo', 'Diego', 'Luis', 'Carlos'
    ],
    last: []
  },
  female: {
    first: [
      'Maya', 'Zoe', 'Riley', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella',
      'Mia', 'Amelia', 'Harper', 'Evelyn', 'Luna', 'Aria', 'Layla', 'Chloe',
      'Ella', 'Emily', 'Madison', 'Sofia', 'Camila', 'Gabriella', 'Jasmine',
      'Natalie', 'Grace', 'Hannah', 'Victoria', 'Naomi', 'Aaliyah', 'Leah'
    ],
    last: []
  },
  neutral: {
    first: [
      'Jordan', 'Taylor', 'Casey', 'Alex', 'Riley', 'Morgan', 'Avery', 'Quinn',
      'Sage', 'River', 'Rowan', 'Skylar', 'Charlie', 'Dakota', 'Phoenix'
    ],
    last: []
  },
  last: [
    // Diverse surnames representing various ethnicities
    'Anderson', 'Williams', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore',
    'Taylor', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia',
    'Martinez', 'Rodriguez', 'Lopez', 'Gonzalez', 'Hernandez', 'Perez', 'Sanchez',
    'Rivera', 'Torres', 'Ramirez', 'Kim', 'Lee', 'Park', 'Nguyen', 'Tran', 'Patel',
    'Singh', 'Kumar', 'Chen', 'Wang', 'Liu', 'Yang', 'Zhang', 'Wu', 'Huang',
    'Cohen', 'Levy', 'Rosenberg', 'O\'Brien', 'Murphy', 'Kelly', 'Sullivan', 'Walsh',
    'Okafor', 'Adeyemi', 'Mensah', 'Diallo', 'Koné', 'Ali', 'Hassan', 'Ahmed'
  ]
};

class NameGenerator {
  private usedNames: Set<string> = new Set();
  private mappings: NameMapping[] = [];

  /**
   * Generate a new name based on demographics
   */
  generateName(
    gender: 'male' | 'female' | 'nonbinary' | 'unknown' = 'unknown',
    ethnicity?: string
  ): string {
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      // Select first name based on gender
      if (gender === 'male') {
        firstName = this.getRandomItem(namePool.male.first);
      } else if (gender === 'female') {
        firstName = this.getRandomItem(namePool.female.first);
      } else if (gender === 'nonbinary') {
        firstName = this.getRandomItem(namePool.neutral.first);
      } else {
        // Random gender if unknown
        const genderChoice = Math.random();
        if (genderChoice < 0.45) {
          firstName = this.getRandomItem(namePool.male.first);
        } else if (genderChoice < 0.9) {
          firstName = this.getRandomItem(namePool.female.first);
        } else {
          firstName = this.getRandomItem(namePool.neutral.first);
        }
      }

      // Select last name (ethnicity-aware if specified)
      lastName = this.getLastName(ethnicity);
      fullName = `${firstName} ${lastName}`;

      attempts++;
      if (attempts > maxAttempts) {
        // Fallback: add middle initial to ensure uniqueness
        const middleInitial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        fullName = `${firstName} ${middleInitial}. ${lastName}`;
        break;
      }
    } while (this.usedNames.has(fullName));

    this.usedNames.add(fullName);
    return fullName;
  }

  /**
   * Get a random item from an array
   */
  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Get a last name, optionally filtered by ethnicity
   */
  private getLastName(ethnicity?: string): string {
    const lastNames = namePool.last;

    // If ethnicity is specified, try to match it
    if (ethnicity) {
      const ethnicityLower = ethnicity.toLowerCase();

      if (ethnicityLower.includes('hispanic') || ethnicityLower.includes('latin')) {
        const hispanicNames = ['Garcia', 'Martinez', 'Rodriguez', 'Lopez', 'Gonzalez', 'Hernandez', 'Perez', 'Sanchez', 'Rivera', 'Torres', 'Ramirez'];
        return this.getRandomItem(hispanicNames);
      }

      if (ethnicityLower.includes('asian') || ethnicityLower.includes('chinese') || ethnicityLower.includes('korean') || ethnicityLower.includes('vietnamese')) {
        const asianNames = ['Kim', 'Lee', 'Park', 'Nguyen', 'Tran', 'Chen', 'Wang', 'Liu', 'Yang', 'Zhang', 'Wu', 'Huang'];
        return this.getRandomItem(asianNames);
      }

      if (ethnicityLower.includes('indian') || ethnicityLower.includes('south asian')) {
        const indianNames = ['Patel', 'Singh', 'Kumar', 'Sharma', 'Gupta', 'Reddy'];
        return this.getRandomItem(indianNames);
      }

      if (ethnicityLower.includes('african') || ethnicityLower.includes('black')) {
        const africanNames = ['Okafor', 'Adeyemi', 'Mensah', 'Diallo', 'Koné', 'Williams', 'Johnson', 'Jackson', 'Brown'];
        return this.getRandomItem(africanNames);
      }

      if (ethnicityLower.includes('irish') || ethnicityLower.includes('celtic')) {
        const irishNames = ['O\'Brien', 'Murphy', 'Kelly', 'Sullivan', 'Walsh', 'McCarthy', 'Ryan'];
        return this.getRandomItem(irishNames);
      }

      if (ethnicityLower.includes('jewish')) {
        const jewishNames = ['Cohen', 'Levy', 'Rosenberg', 'Goldstein', 'Friedman'];
        return this.getRandomItem(jewishNames);
      }

      if (ethnicityLower.includes('middle east') || ethnicityLower.includes('arab')) {
        const middleEasternNames = ['Ali', 'Hassan', 'Ahmed', 'Ibrahim', 'Khalil'];
        return this.getRandomItem(middleEasternNames);
      }
    }

    // Default: return random last name
    return this.getRandomItem(lastNames);
  }

  /**
   * Add a name mapping to track old -> new name changes
   */
  addMapping(
    oldName: string,
    newName: string,
    context: string,
    demographics: NameMapping['demographics'] = {}
  ): void {
    this.mappings.push({
      oldName,
      newName,
      context,
      demographics
    });
  }

  /**
   * Get all name mappings
   */
  getMappings(): NameMapping[] {
    return this.mappings;
  }

  /**
   * Export mappings as JSON
   */
  exportMappings(): string {
    return JSON.stringify(this.mappings, null, 2);
  }

  /**
   * Generate a first name only
   */
  generateFirstName(gender: 'male' | 'female' | 'nonbinary' | 'unknown' = 'unknown'): string {
    if (gender === 'male') {
      return this.getRandomItem(namePool.male.first);
    } else if (gender === 'female') {
      return this.getRandomItem(namePool.female.first);
    } else if (gender === 'nonbinary') {
      return this.getRandomItem(namePool.neutral.first);
    } else {
      // Random gender if unknown
      const genderChoice = Math.random();
      if (genderChoice < 0.45) {
        return this.getRandomItem(namePool.male.first);
      } else if (genderChoice < 0.9) {
        return this.getRandomItem(namePool.female.first);
      } else {
        return this.getRandomItem(namePool.neutral.first);
      }
    }
  }
}

export default NameGenerator;
export type { NameMapping };
