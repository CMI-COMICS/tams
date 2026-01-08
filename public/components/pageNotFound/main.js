import styles from './component.module.css';
import PAGEILLUSTRATION from '../../icons/file-search.svg';

export default function Main(root) {
    root.innerHTML = `
        <div class="${styles['container']}">
            <img
                src="${PAGEILLUSTRATION}"
            >
            <p>Oops! The page you're looking for doesn't exists</p>
            <button>Back</button>
        </div>
    `;
}