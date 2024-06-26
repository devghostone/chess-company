import { emitAction } from '../types/action';
import { ws } from '../types/ws';
import { messageAction } from '../utils/wsAction';

export default function event(ws: ws) {
    ws.on('message', async (message) => {
        try {
            console.log('emitting action.');
            console.log(`${message}`);
            console.log('==========================');
            const action = JSON.parse(`${message}`) as emitAction;
            messageAction(ws, action);
        } catch (err) {
            console.log('Error reading emitted action: ' + err);
        }
    });
}
