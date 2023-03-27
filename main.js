import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/object/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(4);


console.log($htmlBoardGame);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame); 