const bd = document.body;
const bdctx = bd.innerHTML;
const template = `
<h1 style="font-family: 'Lucida Console', 'Courier New', monospace; text-shadow: 0px 3px 2px rgb(91, 100, 110); font-weight: 1000; color:rgb(30, 30, 30);">MillKeny-ի Անիմաստ Հայերեն Բառարանի Ծրագրեր (անճաշակ դիզայնով)</h1>
<button class="hdr" onclick="location.href='index.html'">Հանգեր</button>
<button class="hdr" onclick="location.href='mostfreq.html'">Ամենատարածվածներ</button>
<button class="hdr" onclick="location.href='writer.html'">Պոետ</button>
<button class="hdr" onclick="location.href='xach.html'">ԽԱՉԲԱՌ</button>
<button class="hdr" onclick="location.href='dic.html'">Որոնում</button>
<button class="hdr" onclick="location.href='wordle.html'">WORDLE</button>
${bdctx}
`;


bd.innerHTML = template;

console.log(template)