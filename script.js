window.onload = function() {
    const bd = document.body;
    const bdctx = bd.innerHTML;
    const template = `
    <img src="logo.png" class="logo" id="logo">
    <div style="text-align: center; padding-bottom: 15px;">
    <button class="hdr" onclick="location.href='index.html'">Հանգեր</button>
    <button class="hdr" onclick="location.href='mostfreq.html'">Ամենատարածվածներ</button>
    <!-- <button class="hdr" onclick="location.href='writer.html'">Պոետ</button> -->
    <button class="hdr" onclick="location.href='xach.html'">ԽԱՉԲԱՌ</button>
    <button class="hdr" onclick="location.href='dic.html'">Որոնում</button>
    <button class="hdr" onclick="location.href='wordle.html'">WORDLE</button>
    <button class="hdr" onclick="location.href='mail.html'" style="background-color: black; color: white;">Գրել Նամակ</button>
    </div>
    ${bdctx}
    `;

    bd.innerHTML = template;
    document.getElementById("yndv").checked = true;
}

function getwiki(word, callback) {
	$.getJSON("https://hy.wiktionary.org/w/api.php?format=json&action=query&titles={word}&rvprop=content&prop=revisions&redirects=1&callback=?".replace("{word}", word), function (data) {
		var title, content;

		if(!data || !data.query || !data.query.pages || data.query.pages[-1]) {
			return callback({});
		}
		
		for (var page in data.query.pages) {
			title = data.query.pages[page].title;
			content = data.query.pages[page].revisions[0]["*"];
		}

		var text = content.split("\n");

		var linkRegex = /(\[+)([\w\s-]+)(\]+)/g;
		var type2LinkRegex = /(\[+)(\w+)([#|\w]+)(\]+)/g;
		var wikipediaArticleRegex = /(\[+)(:?w:)([\w\s]+)\|([\w\s]+)(\]+)/g;
		var contextDataRegex = /(\[+)([\w\W]+)(\]+)|({+)([\w\W]+)(}+)/g;
		var startingAndTrailingCommasRegex = /(^, )|(,$)/g;
		var italicsRegex = /''/g;
		var wordCharactersRegex = /\w/g;
		
		var cnt = 0;

		function normalizeWikidata(text) {
			text = text.replace(linkRegex, "$2");
			text = text.replace(type2LinkRegex, "$2");
			text = text.replace(wikipediaArticleRegex, "$4");
			text = text.replace(contextDataRegex, "");
			return text;
		}

		var results = []

		text.every(function (line) {	
			//console.log(line)

			if (line.indexOf("# ") == 0) {
				var newDefinition = line.replace("# ", "");
				newDefinition = normalizeWikidata(newDefinition);
				if(newDefinition == "" || newDefinition.includes("տե'ս") || newDefinition.includes("տե՛ս")) return false;
				results.push(newDefinition);
				cnt++;
			}
			if (cnt < 3) return true;
			else return false;
		});
		callback(results);
	});
}

//<h1 style="font-family: 'Lucida Console', 'Courier New', monospace; color:rgb(255, 255, 255); text-align: center; font-size: 48px;">հանգեր.հայ</h1>