import { Button } from '@/shared/ui/Button';
import cls from './NavBar.module.scss';

export function NavBar() {
    return (
        <header className={cls.NavBar}>
            <Button size="m" color="success" variant="outline">
                Ghbdtn
            </Button>
        </header>
    );
}
