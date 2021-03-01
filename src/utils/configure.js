import {createStore} from 'redux';
import root from './root';

const configure = () => createStore(root);

export default configure();