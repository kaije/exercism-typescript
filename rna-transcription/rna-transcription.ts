interface dnaToRna {
  [dnaNucleotide: string]: string
}

let conversions: dnaToRna = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

class Transcriptor {
     toRna( dnaStrand: string ) {
        return this.convertNucleotide(dnaStrand);
    }
    convertNucleotide( dnaNucleotide: string ): string {
      return conversions[dnaNucleotide];
    }
}

export default Transcriptor
