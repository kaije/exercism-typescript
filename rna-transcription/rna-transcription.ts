class Transcriptor {
     toRna( dnaStrand: string ) {
        return this.convertNucleotide(dnaStrand);
    }
    convertNucleotide( dnaNucleotide: string ): string {
      let rnaNucleotide = '';
      switch(dnaNucleotide) {
        case 'C':
          rnaNucleotide = 'G';
          break;
        case 'G':
          rnaNucleotide = 'C';
          break;
        case 'T':
          rnaNucleotide = 'A';
          break;
        case 'A':
          rnaNucleotide = 'U';
          break;
        default:
          null;
      }
      return rnaNucleotide;
    }
}

export default Transcriptor
