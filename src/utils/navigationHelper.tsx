import { navigationItems } from '@/constants/navigation';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import {
  FillContainer,
  MenuItem,
  MenuLink,
  PagesContainer,
} from '@/ui/Navigation/components/NavBar/styled';

export const navigationHelper = (
  handlePages: () => void,
  openPage: boolean,
  pathname: string,
  lang: 'en' | 'ru'
) =>
  navigationItems[lang].map(({ name, path, components }, id) => {
    if (components.length) {
      return (
        <MenuItem
          key={name}
          data-test-id={id}
          onClick={handlePages}
          disabled={openPage}
        >
          {name}
          {openPage && (
            <>
              <FillContainer />
              <PagesContainer data-text-id="pages">
                {components.map(({ name, path }) => (
                  <ArrowLink to={`/${path}`} key={name} text={name} />
                ))}
              </PagesContainer>
            </>
          )}
        </MenuItem>
      );
    }

    return (
      <MenuItem key={id} data-test-id={id}>
        <MenuLink to={path as string} open={path === pathname}>
          {name}
        </MenuLink>
      </MenuItem>
    );
  });
