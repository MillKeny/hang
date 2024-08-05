window.onload = function() {
    const bd = document.body;
    const bdctx = bd.innerHTML;
    const template = `
    <img src="logo.png" class="logo" >
    <div style="text-align: center; padding-bottom: 15px;">
    <button class="hdr" onclick="location.href='index.html'">Հանգեր</button>
    <button class="hdr" onclick="location.href='mostfreq.html'">Ամենատարածվածներ</button>
    <button class="hdr" onclick="location.href='writer.html'">Պոետ</button>
    <button class="hdr" onclick="location.href='xach.html'">ԽԱՉԲԱՌ</button>
    <button class="hdr" onclick="location.href='dic.html'">Որոնում</button>
    <button class="hdr" onclick="location.href='wordle.html'">WORDLE</button>
    </div>
    ${bdctx}
    `;

    bd.innerHTML = template;
}

//<h1 style="font-family: 'Lucida Console', 'Courier New', monospace; color:rgb(255, 255, 255); text-align: center; font-size: 48px;">հանգեր.հայ</h1>