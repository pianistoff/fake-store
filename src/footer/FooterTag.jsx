import { useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { selectThemeMode } from '../common/userSettingsSlice';

function FooterTag({ children }) {
  const themeMode = useSelector(selectThemeMode);

  const Footer = styled('footer')({
    backgroundColor: themeMode === 'light' ? '#802c6e' : '#272727',
  });

  return <Footer>{children}</Footer>;
}

export default FooterTag;
