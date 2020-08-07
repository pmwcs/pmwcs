/** @jsx h */
import { h } from 'preact'
import './styles.js'

import {
  Card,
  CardActions,
  CardActionButton,
  CardActionButtons,
  CardActionIcon,
  CardActionIcons,
  CardMedia,
  CardMediaContent,
  CardPrimaryAction,
} from './index.js'

import { Typography } from '@pmwc/typography'
import { ListDivider } from '@pmwc/list'

export default {
  title: 'Card',
  component: Card,
};

export const fullyFeatured = () => (
  <section>
  <Card style={{ width: '21rem' }}>
    <CardPrimaryAction>
      <CardMedia
        sixteenByNine
        style={{
          backgroundImage: 'url(/images/backgrounds/mb-bg-fb-16.png)'
        }}
      />
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <Typography use="headline6" tag="h2">
          Our Changing Planet
        </Typography>
        <Typography
          use="subtitle2"
          tag="h3"
          theme="textSecondaryOnBackground"
          style={{ marginTop: '-1rem' }}
        >
          by Kurt Wagner
        </Typography>
        <Typography
          use="body1"
          tag="div"
          theme="textSecondaryOnBackground"
        >
          Visit ten places on our planet that are undergoing the biggest
          changes today.
        </Typography>
      </div>
    </CardPrimaryAction>
    <CardActions>
      <CardActionButtons>
        <CardActionButton>Read</CardActionButton>
        <CardActionButton>Bookmark</CardActionButton>
      </CardActionButtons>
      <CardActionIcons>
        <CardActionIcon onIcon="favorite" icon="favorite_border" />
        <CardActionIcon icon="share" />
        <CardActionIcon icon="more_vert" />
      </CardActionIcons>
    </CardActions>
  </Card>
  </section>
)

export const articlePreview = () => (
  <Card outlined style={{ width: '21rem' }}>
    <Typography
      use="subtitle1"
      tag="div"
      style={{ padding: '0.5rem 1rem' }}
      theme="textSecondaryOnBackground"
    >
      Headlines
    </Typography>

    <ListDivider />

    <CardPrimaryAction>
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
          Copper on the rise
        </Typography>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
          Copper price soars amid global market optimism and increased
          demand.
        </Typography>
      </div>
    </CardPrimaryAction>

    <ListDivider />

    <CardPrimaryAction>
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
          U.S. tech startups rebound
        </Typography>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
          Favorable business conditions have allowed startups to secure
          more fundraising deals compared to last year.
        </Typography>
      </div>
    </CardPrimaryAction>

    <ListDivider />

    <CardPrimaryAction>
      <div style={{ padding: '1rem' }}>
        <Typography use="headline5" tag="div">
          Asia's clean energy ambitions
        </Typography>
        <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
          China plans to invest billions of dollars for the development of
          over 300 clean energy projects in Southeast Asia.
        </Typography>
      </div>
    </CardPrimaryAction>

    <ListDivider />

    <CardActions fullBleed>
      <CardActionButton
        label="All Business Headlines"
        trailingIcon="arrow_forward"
      />
    </CardActions>
  </Card>
)

export const miniCard = () => (
  <Card style={{ width: '12.5rem' }}>
    <CardPrimaryAction>
      <CardMedia
        square
        style={{
          backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
        }}
      >
        <CardMediaContent>
          <Typography
            use="subtitle2"
            tag="div"
            theme="textPrimaryOnDark"
            style={{
              padding: '0.5rem 1rem',
              backgroundImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
              bottom: '0',
              left: '0',
              right: '0',
              position: 'absolute'
            }}
          >
            Vacation Photos
          </Typography>
        </CardMediaContent>
      </CardMedia>
    </CardPrimaryAction>
    <CardActions>
      <CardActionIcons>
        <CardActionIcon onIcon="favorite" icon="favorite_border" />
        <CardActionIcon icon="bookmark_border" />
        <CardActionIcon icon="share" />
      </CardActionIcons>
    </CardActions>
  </Card>
)
