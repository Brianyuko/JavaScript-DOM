
        // edit HTML
        // Menambahkan Elemen

        var element = document.createElement('h2');
        var text = document.createTextNode('Belajar Programming Online');
        var box = document.getElementById('box1');

        element.appendChild(text);
        box.appendChild(element);

        // menghapus
        box.removeChild(element);

        var element2 = document.createElement('h3');
        var text2 = document.createTextNode('Belajar Sekarang');
        element2.appendChild(text2);
        var p1Change = document.getElementById('p1');
        
        // Mengganti
        box.replaceChild(element2, p1Change)