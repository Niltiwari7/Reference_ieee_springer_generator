function parseReference(input) {
    const reference = {};
    const citekeyMatch = input.match(/@.*?\{([^,]+)/);
    reference.citekey = citekeyMatch ? citekeyMatch[1] : '';

    const authorMatch = input.match(/author=\{([^}]+)\}/);
    reference.author = authorMatch ? authorMatch[1] : '';

    const titleMatch = input.match(/title=\{([^}]+)\}/);
    reference.title = titleMatch ? titleMatch[1] : '';

    const journalMatch = input.match(/journal=\{([^}]+)\}/);
    reference.journal = journalMatch ? journalMatch[1] : '';

    const booktitleMatch = input.match(/booktitle=\{([^}]+)\}/);
    reference.booktitle = booktitleMatch ? booktitleMatch[1] : '';

    const volumeMatch = input.match(/volume=\{([^}]+)\}/);
    reference.volume = volumeMatch ? volumeMatch[1] : '';

    const numberMatch = input.match(/number=\{([^}]+)\}/);
    reference.number = numberMatch ? numberMatch[1] : '';

    const pagesMatch = input.match(/pages=\{([^}]+)\}/);
    reference.pages = pagesMatch ? pagesMatch[1] : '';

    const yearMatch = input.match(/year=\{([^}]+)\}/);
    reference.year = yearMatch ? yearMatch[1] : '';

    const publisherMatch = input.match(/publisher=\{([^}]+)\}/);
    reference.publisher = publisherMatch ? publisherMatch[1] : '';

    return reference;
}

function convertToBibitem(reference) {
    let bibitem = `\\bibitem{${reference.citekey}}\n`;
    const authors = reference.author.split(' and ').map(author => author.trim());
    const shortenedAuthors = authors.map(author => {
        let parts = author.replace(/,/g, '').split(' '); 
        let lastName = parts[0];
        let initials = parts.slice(1).map(name => name.charAt(0) + '.').join('');
        return `${lastName}, ${initials}`;
    });

    let authorString = shortenedAuthors.join(', ');
    let lastCommaIndex = authorString.lastIndexOf(',');
    if (lastCommaIndex !== -1) {
        authorString = authorString.slice(0, lastCommaIndex) + ' and' + authorString.slice(lastCommaIndex + 1);
    }

    bibitem += `${authorString}, "${reference.title}", `;

    if (reference.booktitle) {
        bibitem += `in \\textit{${reference.booktitle}}, `;
    } else {
        bibitem += `\\textit{${reference.journal}}, `;
    }

    bibitem += `vol. ${reference.volume}`;

    if (reference.number) {
        bibitem += `, no. ${reference.number}`;
    }

    bibitem += `, pp. ${reference.pages}, ${reference.year}`;

    if (reference.publisher) {
        bibitem += `, ${reference.publisher}`;
    }

    bibitem += '.\n';

    return bibitem;
}


let inputText = `
@article{heo2020optimized,
  title={Optimized CSIDH implementation using a 2-torsion point},
  author={Heo, Donghoe and Kim, Suhri and Yoon, Kisoon and Park, Young-Ho and Hong, Seokhie},
  journal={Cryptography},
  volume={4},
  number={3},
  pages={20},
  year={2020},
  publisher={MDPI}
}`;

let reference = parseReference(inputText);
let bibitem = convertToBibitem(reference);
console.log(bibitem);
