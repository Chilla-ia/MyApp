import MenuIcon from '@material-ui/icons/Menu';

export default function BurgerButton({ onClick }) {
    return (
        <MenuIcon onClick={onClick}>
            <span role="img" aria-label="Menu"/>
        </MenuIcon>
    )
}
