//imports
import app from './scripts/app';
import appelems from './scripts/appelements';
import devmode from './scripts/devmode';
import './styles/general.css';
import './styles/app.css';
import './styles/ui.css';

window.onload = () => {
    app.createApp();
    devmode.init();
    appelems.generateNavbar(document.getElementById('appNavbar'));
    appelems.generateBottom(document.getElementById('appBottom'));
    appelems.generateMain(document.getElementById('appMain'));
}
