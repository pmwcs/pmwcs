import { __read, __spread } from 'tslib'
import { h } from 'preact'
import { CircularProgress } from '@pmwc/circular-progress'
import { DocsMarkdown } from '../../../doc-utils'
import InstallationMD from '../markdown/README-INSTALLATION.md'
import UsageMD from '../markdown/README-USAGE.md'
import StylingMD from '../markdown/README-STYLING-THEMING.md'
import MethodologyMD from '../markdown/README-METHODOLOGY.md'
import LibraryIntegrationsMD from '../markdown/README-LIBRARY-INTEGRATIONS.md'
import TypesMD from '../markdown/README-TYPES.md'
import { galleryExample as avatarExample } from '@pmwc/avatar/readme'
import { galleryExample as badgeExample } from '@pmwc/badge/readme'
import { galleryExample as buttonExample } from '@pmwc/button/readme'
import { galleryExample as fabExample } from '@pmwc/fab/readme'
import { galleryExample as iconButtonExample } from '@pmwc/icon-button/readme'
import { galleryExample as cardExample } from '@pmwc/card/readme'
import { galleryExample as chipExample } from '@pmwc/chip/readme'
import { galleryExample as dataTableExample } from '@pmwc/data-table/readme'
import { galleryExample as drawerExample } from '@pmwc/drawer/readme'
import { galleryExample as dialogExample } from '@pmwc/dialog/readme'
import { galleryExample as elevationExample } from '@pmwc/elevation/readme'
import { galleryExample as gridListExample } from '@pmwc/grid-list/readme'
import { galleryExample as imageListExample } from '@pmwc/image-list/readme'
import { galleryExample as checkboxExample } from '@pmwc/checkbox/readme'
import { galleryExample as radioExample } from '@pmwc/radio/readme'
import { galleryExample as selectExample } from '@pmwc/select/readme'
import { galleryExample as sliderExample } from '@pmwc/slider/readme'
import { galleryExample as switchExample } from '@pmwc/switch/readme'
import { galleryExample as textfieldExample } from '@pmwc/textfield/readme'
import { galleryExample as gridExample } from '@pmwc/grid/readme'
import { galleryExample as linearProgressExample } from '@pmwc/linear-progress/readme'
import { galleryExample as circularProgressExample } from '@pmwc/circular-progress/readme'
import { galleryExample as listExample } from '@pmwc/list/readme'
import { galleryExample as menuExample } from '@pmwc/menu/readme'
import { galleryExample as rippleExample } from '@pmwc/ripple/readme'
import { galleryExample as snackbarExample } from '@pmwc/snackbar/readme'
import { galleryExample as tabsExample } from '@pmwc/tabs/readme'
import { galleryExample as themeExample } from '@pmwc/theme/readme'
import { galleryExample as topAppBarExample } from '@pmwc/top-app-bar/readme'
import { galleryExample as tooltipExample } from '@pmwc/tooltip/readme'
import { galleryExample as typographyExample } from '@pmwc/typography/readme'
import { galleryExample as iconExample } from '@pmwc/icon/readme'
var InstallationDocs = function () { return React.createElement(DocsMarkdown, { fileSrc: InstallationMD }) }
var UsageDocs = function () { return React.createElement(DocsMarkdown, { fileSrc: UsageMD }) }
var StylingThemingDocs = function () { return React.createElement(DocsMarkdown, { fileSrc: StylingMD }) }
var MethodologyDocs = function () { return React.createElement(DocsMarkdown, { fileSrc: MethodologyMD }) }
var LibraryIntegrationsDocs = function () { return (React.createElement(DocsMarkdown, { fileSrc: LibraryIntegrationsMD })) }
var TypeDocs = function () { return React.createElement(DocsMarkdown, { fileSrc: TypesMD }) }
var ResourcesDocs = React.lazy(function () { return import('../views/resources') })
var AvatarDocs = React.lazy(function () { return import('@pmwc/avatar/readme') })
var BadgeDocs = React.lazy(function () { return import('@pmwc/badge/readme') })
var ButtonDocs = React.lazy(function () { return import('@pmwc/button/readme') })
var FabDocs = React.lazy(function () { return import('@pmwc/fab/readme') })
var IconButtonDocs = React.lazy(function () { return import('@pmwc/icon-button/readme') })
var CardDocs = React.lazy(function () { return import('@pmwc/card/readme') })
var ChipDocs = React.lazy(function () { return import('@pmwc/chip/readme') })
var DataTableDocs = React.lazy(function () { return import('@pmwc/data-table/readme') })
var DialogDocs = React.lazy(function () { return import('@pmwc/dialog/readme') })
var DrawerDocs = React.lazy(function () { return import('@pmwc/drawer/readme') })
var ElevationDocs = React.lazy(function () { return import('@pmwc/elevation/readme') })
var GridListDocs = React.lazy(function () { return import('@pmwc/grid-list/readme') })
var ImageListDocs = React.lazy(function () { return import('@pmwc/image-list/readme') })
var CheckboxDocs = React.lazy(function () { return import('@pmwc/checkbox/readme') })
var FormfieldDocs = React.lazy(function () { return import('@pmwc/formfield/readme') })
var RadioDocs = React.lazy(function () { return import('@pmwc/radio/readme') })
var SelectDocs = React.lazy(function () { return import('@pmwc/select/readme') })
var SliderDocs = React.lazy(function () { return import('@pmwc/slider/readme') })
var SwitchDocs = React.lazy(function () { return import('@pmwc/switch/readme') })
var TextfieldDocs = React.lazy(function () { return import('@pmwc/textfield/readme') })
var GridDocs = React.lazy(function () { return import('@pmwc/grid/readme') })
var LinearProgressDocs = React.lazy(function () {
  return import('@pmwc/linear-progress/readme')
})
var CircularProgressDocsDocs = React.lazy(function () {
  return import('@pmwc/circular-progress/readme')
})
var ListDocs = React.lazy(function () { return import('@pmwc/list/readme') })
var ListCollapsibleDocs = React.lazy(function () {
  return import('@pmwc/list/readme-collapsible')
})
var ListVariantsDocs = React.lazy(function () { return import('@pmwc/list/readme-variants') })
var MenuDocs = React.lazy(function () { return import('@pmwc/menu/readme') })
var RippleDocs = React.lazy(function () { return import('@pmwc/ripple/readme') })
var SnackbarDocs = React.lazy(function () { return import('@pmwc/snackbar/readme') })
var TabsDocs = React.lazy(function () { return import('@pmwc/tabs/readme') })
var ThemeDocs = React.lazy(function () { return import('@pmwc/theme/readme') })
var TopAppBarDocs = React.lazy(function () { return import('@pmwc/top-app-bar/readme') })
var TypographyDocs = React.lazy(function () { return import('@pmwc/typography/readme') })
var IconDocs = React.lazy(function () { return import('@pmwc/icon/readme') })
var ProviderDocs = React.lazy(function () { return import('@pmwc/provider/readme') })
var TooltipDocs = React.lazy(function () { return import('@pmwc/tooltip/readme') })
var Loading = function () {
  return (React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      boxSizing: 'border-box'
    }
  },
  React.createElement(CircularProgress, { size: 'xlarge' })))
}
var Loadable = function (Component) {
  return function () {
    return (React.createElement(React.Suspense, { fallback: React.createElement(Loading, null) },
      React.createElement(Component, null)))
  }
}
export var menuContent = [
  {
    label: 'Getting Started',
    options: [
      {
        label: 'Installation',
        url: '/installation',
        component: Loadable(InstallationDocs)
      },
      {
        label: 'Basic Usage',
        url: '/usage',
        component: Loadable(UsageDocs)
      },
      {
        label: 'Project Methodology',
        url: '/methodology',
        component: Loadable(MethodologyDocs)
      },
      {
        label: 'Type System',
        url: '/type-system',
        component: Loadable(TypeDocs)
      },
      {
        label: 'Library Integrations',
        url: '/library-integrations',
        component: Loadable(LibraryIntegrationsDocs)
      }
    ]
  },
  {
    label: 'Style and Theming',
    url: '/styling-theming',
    component: Loadable(StylingThemingDocs)
  },
  {
    label: 'Resources',
    url: '/resources',
    component: Loadable(ResourcesDocs)
  },
  {
    label: 'Components',
    options: [
      {
        label: 'Avatars',
        url: '/avatars',
        gallery: avatarExample,
        component: Loadable(AvatarDocs)
      },
      {
        label: 'Badges',
        url: '/badges',
        gallery: badgeExample,
        component: Loadable(BadgeDocs)
      },
      {
        label: 'Buttons',
        options: [
          {
            label: 'Buttons',
            url: '/buttons',
            gallery: buttonExample,
            component: Loadable(ButtonDocs)
          },
          {
            label: 'Fabs',
            url: '/fabs',
            gallery: fabExample,
            component: Loadable(FabDocs)
          },
          {
            label: 'Icon Buttons',
            url: '/icon-buttons',
            gallery: iconButtonExample,
            component: Loadable(IconButtonDocs)
          }
        ]
      },
      {
        label: 'Cards',
        url: '/cards',
        gallery: cardExample,
        component: Loadable(CardDocs)
      },
      {
        label: 'Chips',
        url: '/chips',
        gallery: chipExample,
        component: Loadable(ChipDocs)
      },
      {
        label: 'Data Tables',
        url: '/data-tables',
        gallery: dataTableExample,
        component: Loadable(DataTableDocs)
      },
      {
        label: 'Dialogs',
        url: '/dialogs',
        gallery: dialogExample,
        component: Loadable(DialogDocs)
      },
      {
        label: 'Drawers',
        url: '/drawers',
        gallery: drawerExample,
        component: Loadable(DrawerDocs)
      },
      {
        label: 'Elevation',
        url: '/elevation',
        gallery: elevationExample,
        component: Loadable(ElevationDocs)
      },
      {
        label: 'Grids',
        options: [
          {
            label: 'Layout Grid',
            url: '/layout-grid',
            gallery: gridExample,
            component: Loadable(GridDocs)
          },
          {
            label: 'Image Lists',
            url: '/image-lists',
            gallery: imageListExample,
            component: Loadable(ImageListDocs)
          },
          {
            label: 'Grid Lists',
            url: '/grid-lists',
            gallery: gridListExample,
            component: Loadable(GridListDocs)
          }
        ]
      },
      {
        label: 'Inputs and Controls',
        options: [
          {
            label: 'Checkboxes',
            url: '/checkboxes',
            gallery: checkboxExample,
            component: Loadable(CheckboxDocs)
          },
          {
            label: 'FormFields',
            url: '/formfields',
            component: Loadable(FormfieldDocs)
          },
          {
            label: 'Radio Buttons',
            url: '/radio-buttons',
            gallery: radioExample,
            component: Loadable(RadioDocs)
          },
          {
            label: 'Select Menus',
            url: '/select-menus',
            gallery: selectExample,
            component: Loadable(SelectDocs)
          },
          {
            label: 'Sliders',
            url: '/sliders',
            gallery: sliderExample,
            component: Loadable(SliderDocs)
          },
          {
            label: 'Switches',
            url: '/switches',
            gallery: switchExample,
            component: Loadable(SwitchDocs)
          },
          {
            label: 'Text Fields',
            url: '/text-fields',
            gallery: textfieldExample,
            component: Loadable(TextfieldDocs)
          }
        ]
      },
      {
        label: 'Progress',
        options: [
          {
            label: 'Linear Progress',
            url: '/linear-progress',
            gallery: linearProgressExample,
            component: Loadable(LinearProgressDocs)
          },
          {
            label: 'Circular Progress',
            url: '/circular-progress',
            gallery: circularProgressExample,
            component: Loadable(CircularProgressDocsDocs)
          }
        ]
      },
      {
        label: 'Lists',
        options: [
          {
            label: 'Lists',
            url: '/lists',
            gallery: listExample,
            component: Loadable(ListDocs)
          },
          {
            label: 'Collapsible',
            url: '/lists-collapsible',
            component: Loadable(ListCollapsibleDocs)
          },
          {
            label: 'Variants',
            url: '/lists-variants',
            component: Loadable(ListVariantsDocs)
          }
        ]
      },
      {
        label: 'Menus',
        url: '/menus',
        gallery: menuExample,
        component: Loadable(MenuDocs)
      },
      {
        label: 'Ripples',
        url: '/ripples',
        gallery: rippleExample,
        component: Loadable(RippleDocs)
      },
      {
        label: 'Snackbars',
        url: '/snackbars',
        gallery: snackbarExample,
        component: Loadable(SnackbarDocs)
      },
      {
        label: 'Tabs',
        url: '/tabs',
        gallery: tabsExample,
        component: Loadable(TabsDocs)
      },
      {
        label: 'Theme',
        url: '/theme',
        gallery: themeExample,
        component: Loadable(ThemeDocs)
      },
      {
        label: 'Tooltips',
        url: '/tooltips',
        gallery: tooltipExample,
        component: Loadable(TooltipDocs)
      },
      {
        label: 'Top App Bar',
        url: '/top-app-bar',
        gallery: topAppBarExample,
        component: Loadable(TopAppBarDocs)
      },
      {
        label: 'Typography',
        url: '/typography',
        gallery: typographyExample,
        component: Loadable(TypographyDocs)
      },
      {
        label: 'Icons',
        url: '/icons',
        gallery: iconExample,
        component: Loadable(IconDocs)
      },
      {
        label: 'Provider',
        url: '/provider',
        component: Loadable(ProviderDocs)
      }
    ]
  }
]
export var galleryContent = menuContent
  .reduce(function (acc, item) {
    if ('options' in item) {
      acc.push.apply(acc, __spread(item.options))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
  .filter(function (item) { return !!item.gallery })
