const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
 
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  
  const pAequorFactory = (number, dnaStrand) => {
    return {
      specimenNum: number,
      dna: dnaStrand,
      
      mutate() {
        const randomBaseIndex = Math.floor(Math.random() * this.dna.length);
        const generatedBase = returnRandBase();
        
        
        if (this.dna[randomBaseIndex] === generatedBase) {
          console.log(`pAequorFactory.mutate() - The new DNA base '${generatedBase}' is identical to the 
          current base '${this.dna[randomBaseIndex]}' and does not need changed.\n`);
          return this.dna;
        } else {
          
          console.log(`----------------\nOriginal DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}`);
          this.dna[randomBaseIndex] = generatedBase;
          console.log(`Newly inserted DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}\n----------------\n`);
          return this.dna;
        }
      },
  
      compareDNA(pAequorObject) {
        console.log(`MY DNA sequence: ${this.dna}`);
        console.log(`Other specimens DNA sequence: ${pAequorObject.dna}`);
  
        if (this.dna === pAequorObject.dna) {
          console.log(`Specimen ${pAequorObject.specimenNum} has an idential DNA sequence.`);
        } else {
          let identicalBases= 0;
          
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === pAequorObject.dna[i]) identicalBases++;
          }
          
         
          console.log(`Total DNA in common between specimen ${this.specimenNum} and specimen ${pAequorObject.specimenNum}: 
          ${(identicalBases / this.dna.length).toFixed(2)}%`);
  
        }
      },
  
      
      willLikelySurvive() {
        dnaBaseCounter = 0;
        this.dna.forEach(dnaBase => {
          if (dnaBase === 'G' || dnaBase === 'C') dnaBaseCounter++;
        });
  
        
        const survivalPercentage = ((dnaBaseCounter / this.dna.length) * 100).toFixed(2);
        if (survivalPercentage >= 60) {
          console.log(`Greater chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
        } else {
          console.log(`Lesser chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
        }
      }
    }
  };
  
 
  const storedSpecimens = [];
  for (i = 0; i < 30; i++) {
    storedSpecimens.push(pAequorFactory(i, mockUpStrand()));
  }