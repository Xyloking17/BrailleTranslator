//lexicon for all possible arrangements of braille symbols
//used for Translation

//uses ternary operators for when num is active, since
//number symbols and letter symbols are the same

//TODO: Create numberic lexicon to remove ternary operators

function translateToLetter(activeButtons, num) {
  let char;
  switch(activeButtons.join(' '))
  {

    case '0':         num ? char = '1' : char = 'A'; return char;
    case '0 2':       num ? char = '2' : char = 'B'; return char;
    case '0 1':       num ? char = '3' : char = 'C'; return char;
    case '0 1 3':     num ? char = '4' : char = 'D'; return char;
    case '0 3':       num ? char = '5' : char = 'E'; return char;
    case '0 1 2':     num ? char = '6' : char = 'F'; return char;
    case '0 1 2 3':   num ? char = '7' : char = 'G'; return char;
    case '0 2 3':     num ? char = '8' : char = 'H'; return char;
    case '1 2':       num ? char = '9' : char = 'I'; return char;
    case '1 2 3':     num ? char = '0' : char = 'J'; return char;
    case '0 4':       num ? char = ' ' : char = 'K'; return char;
    case '0 2 4':     num ? char = ' ' : char = 'L'; return char;
    case '0 1 4':     num ? char = ' ' : char = 'M'; return char;
    case '0 1 3 4':   num ? char = ' ' : char = 'N'; return char;
    case '0 3 4':     num ? char = ' ' : char = 'O'; return char;
    case '0 1 2 4':   num ? char = ' ' : char = 'P'; return char;
    case '0 1 2 3 4': num ? char = ' ' : char = 'Q'; return char;
    case '0 2 3 4':   num ? char = ' ' : char = 'R'; return char;
    case '1 2 4':     num ? char = ' ' : char = 'S'; return char;
    case '1 2 3 4':   num ? char = ' ' : char = 'T'; return char;
    case '0 4 5':     num ? char = ' ' : char = 'U'; return char;
    case '0 2 4 5':   num ? char = ' ' : char = 'V'; return char;
    case '1 2 3 5':   num ? char = ' ' : char = 'W'; return char;
    case '0 1 4 5':   num ? char = ' ' : char = 'X'; return char;
    case '0 1 3 4 5': num ? char = ' ' : char = 'Y'; return char;
    case '0 3 4 5':   num ? char = ' ' : char = 'Z'; return char;
    default: return ' ';

  }
}
