import { Link } from 'react-router-dom';
import './LinkButton.css';

interface LinkButtonProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children, className, onClick }) => {
    return (
        <Link to={to} className={`link-button ${className || ''}`} onClick={onClick}>
            {children}
        </Link>
    );
};