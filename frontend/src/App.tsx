import './App.css';
import { Button } from './design-systems/button/Button';

function App() {
    return (
        <>
            <div>
                <div className="space-x-2 p-4">
                    <Button size="sm">Primary sm</Button>
                    <Button>Primary md</Button>
                    <Button size="lg">Primary lg</Button>
                </div>
                <div className="space-x-2 p-4">
                    <Button variant="secondary" size="sm">
                        Secondary sm
                    </Button>
                    <Button variant="secondary">Secondary md</Button>
                    <Button variant="secondary" size="lg">
                        Secondary lg
                    </Button>
                </div>
            </div>
        </>
    );
}

export default App;
