const specialWords = ["of"];
/**
    @param {string} text
*/
export function hyphenCaseToTitleCase(text) {
	if (text.length === 0) return text;
	const words = text.split("-");
	const newText = new Array(words.length);

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (specialWords.includes(word)) {
			newText[i] = word;
			continue;
		}
		newText[i] = word[0].toUpperCase().concat(word.slice(1));
	}

	return newText.join(" ");
}

export const GOOGLE_APPSCRIPT_API_URL =
	"https://script.google.com/macros/s/AKfycbyf4DRfGuwalzqovjBwOjwkc1OJFIzy_Egbsk3bH9auZ_XFa8jQQyf4hPll8Xl1cM09/exec";
