/* eslint-disable @typescript-eslint/no-empty-interface */
type InputType =
  | 'text'
  | 'longText'
  | 'list'
  | 'object'
  | 'reference'
  | 'richText'
  | 'code'
  | 'color'
  | 'file'
  | 'number'
  | 'boolean'

type BuilderCMSModels =
  | 'card-grid'
  | 'three-card-row'
  | 'integrations'
  | 'solutions-home'
  | 'title-and-image'
  | 'logo-list'
  | 'collapsible-list'
  | 'quotes-grid'
  | 'solutions-form'
  | 'calculator'

export type Input = {
  name: string
  type: InputType
  defaultValue?: string
  subFields?: Input[]
  model?: BuilderCMSModels
}

type BuilderComponentProps = {
  name: string
  inputs: Input[]
}

export interface BuilderProps {
  builderState: BuilderState
  builderBlock: BuilderBlock
}

export interface BuilderState {
  context: Context
  state: State2
  updates: number
  key: number
  rootState: RootState
  content: Content
}

export interface Context {
  apiKey: string
  builderContent: BuilderContent
}

export interface BuilderContent {
  lastUpdatedBy: string
  folders: any[]
  previewUrl: string
  data: Data
  modelId: string
  query: any[]
  published: string
  firstPublished: number
  testRatio: number
  lastUpdated: number
  createdDate: number
  createdBy: string
  meta: Meta
  variations: Variations
  name: string
  id: string
  rev: string
  variationId: any
  testVariationId: any
  testVariationName: string
}

export interface Data {
  environment: string
  slug: string
  blocks: Block[]
  state: State
}

export interface Block {
  '@type': string
  '@version'?: number
  id: string
  component?: Component
  responsiveStyles: ResponsiveStyles
  tagName?: string
  properties?: Properties
}

export interface Component {
  name: string
  options: Options
}

export interface Options {}

export interface ResponsiveStyles {
  large: Large
}

export interface Large {
  display: string
  flexDirection?: string
  position?: string
  flexShrink?: string
  boxSizing?: string
  marginTop?: string
  height?: string
  width?: string
  opacity?: string
  overflow?: string
  pointerEvents?: string
}

export interface Properties {
  src: string
  'aria-hidden': string
  alt: string
  role: string
  width: string
  height: string
}

export interface State {
  deviceSize: string
  location: Location
}

export interface Location {
  host: string
  pathname: string
  path: string[]
  query: Query
}

export interface Query {}

export interface Meta {
  lastPreviewUrl: string
  kind: string
  hasLinks: boolean
}

export interface Variations {}

export interface State2 {
  isBrowser: boolean
  isServer: boolean
  location: Location2
  deviceSize: string
  device: string
}

export interface Location2 {
  pathname: string
  hostname: string
  search: string
  host: string
  path: string[]
  query: Query2
}

export interface Query2 {}

export interface RootState {
  isBrowser: boolean
  isServer: boolean
  location: Location3
  deviceSize: string
  device: string
}

export interface Location3 {
  host: string
  pathname: string
  path: string[]
  query: Query3
}

export interface Query3 {}

export interface Content {
  lastUpdatedBy: string
  folders: any[]
  previewUrl: string
  data: Data2
  modelId: string
  query: any[]
  published: string
  firstPublished: number
  testRatio: number
  lastUpdated: number
  createdDate: number
  createdBy: string
  meta: Meta2
  variations: Variations2
  name: string
  id: string
  rev: string
  variationId: any
  testVariationId: any
  testVariationName: string
}

export interface Data2 {
  environment: string
  slug: string
  blocks: Block2[]
  state: State3
}

export interface Block2 {
  '@type': string
  '@version'?: number
  id: string
  component?: Component2
  responsiveStyles: ResponsiveStyles2
  tagName?: string
  properties?: Properties2
}

export interface Component2 {
  name: string
  options: Options2
}

export interface Options2 {}

export interface ResponsiveStyles2 {
  large: Large2
}

export interface Large2 {
  display: string
  flexDirection?: string
  position?: string
  flexShrink?: string
  boxSizing?: string
  marginTop?: string
  height?: string
  width?: string
  opacity?: string
  overflow?: string
  pointerEvents?: string
}

export interface Properties2 {
  src: string
  'aria-hidden': string
  alt: string
  role: string
  width: string
  height: string
}

export interface State3 {
  deviceSize: string
  location: Location4
}

export interface Location4 {
  host: string
  pathname: string
  path: string[]
  query: Query4
}

export interface Query4 {}

export interface Meta2 {
  lastPreviewUrl: string
  kind: string
  hasLinks: boolean
}

export interface Variations2 {}

export interface BuilderBlock {
  '@type': string
  '@version': number
  id: string
  component: Component3
  responsiveStyles: ResponsiveStyles3
}

export interface Component3 {
  name: string
  options: Options3
}

export interface Options3 {}

export interface ResponsiveStyles3 {
  large: Large3
}

export interface Large3 {
  display: string
  flexDirection: string
  position: string
  flexShrink: string
  boxSizing: string
  marginTop: string
}

export interface ReferenceModel {
  '@type': string
  id: string
  model: string
  value: Value
}

export interface Value {
  lastUpdatedBy: string
  folders: any[]
  data: any
  modelId: string
  query: any[]
  published: string
  firstPublished: number
  testRatio: number
  lastUpdated: number
  createdDate: number
  createdBy: string
  meta: Meta
  variations: Variations
  name: string
  id: string
  rev: string
}

export interface Meta {
  kind: string
  lastPreviewUrl: string
}

export interface Variations {}

export default BuilderComponentProps
