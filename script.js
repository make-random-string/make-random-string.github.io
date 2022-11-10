import {
  hiragana,
  katakana,
  hiraganaDakuon,
  katakanaDakuon,
  smallAlphabet,
  bigAlphabet,
} from './strings.js';

run.addEventListener('click', (e) => {
  const targetString = makeTargetString();
  const num = +stringsLength.value;
  const max = +maxLength.value;
  const min = +minLength.value;
  if (min <= 0 || min > max) return alert('文字列の長さが無効です');
  result.value = '';
  for (let i = 0; i < num; i++) {
    const res = Array(Math.floor(Math.random() * (max - min + 1) + min))
      .fill('')
      .map(() => targetString[Math.floor(Math.random() * targetString.length)])
      .join('');
    result.value += res + '\n';
  }
});

function makeTargetString() {
  let result = customString.value;
  if (addHiragana.checked) result += hiragana;
  if (addKatakana.checked) result += katakana;
  if (addHDakuon.checked) result += hiraganaDakuon;
  if (addKDakuon.checked) result += katakanaDakuon;
  if (addSmall.checked) result += smallAlphabet;
  if (addBig.checked) result += bigAlphabet;
  return result;
}
