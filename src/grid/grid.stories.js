/** @jsx h */
import { h } from 'preact'

import './styles.js'
import './stories.css'

import {
  Grid,
  GridCell,
  GridRow
} from './index.js'

export default {
  title: 'Grid',
  component: Grid
}

export const basic = () => (
  <section className='story-layout-grid'>
    <Grid>
      <GridCell span={4}>1</GridCell>
      <GridCell span={4}>2</GridCell>
      <GridCell span={4}>3</GridCell>
    </Grid>
  </section>
)

export const gridRow = () => (
  <section className='story-layout-grid'>
    <Grid>
      {/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridRow components. */}
      <GridRow>
        <GridCell span={6}>1</GridCell>
        <GridCell span={6}>
          <GridRow>
            <GridCell span={6}>a</GridCell>
            <GridCell span={6}>b</GridCell>
          </GridRow>
        </GridCell>
      </GridRow>
    </Grid>
  </section>
)
