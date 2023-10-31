import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  metadataCollection?: Maybe<MetadataCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  featuresCollection?: Maybe<FeaturesCollection>;
  partnersCardCollection?: Maybe<PartnersCardCollection>;
  blogCollection?: Maybe<BlogCollection>;
  eventCollection?: Maybe<EventCollection>;
  mediaBlockCollection?: Maybe<MediaBlockCollection>;
  pressPostCollection?: Maybe<PressPostCollection>;
  personCollection?: Maybe<PersonCollection>;
  logoCollection?: Maybe<LogoCollection>;
  listBlockCollection?: Maybe<ListBlockCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsHomeCollectionOrder>>>;
};


export type AssetLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type AssetLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsSectionCollectionOrder>>>;
};


export type AssetLinkingCollectionsMetadataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsMetadataCollectionOrder>>>;
};


export type AssetLinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsSectionBlockCollectionOrder>>>;
};


export type AssetLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsBlogPostCollectionOrder>>>;
};


export type AssetLinkingCollectionsFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsFeaturesCollectionOrder>>>;
};


export type AssetLinkingCollectionsPartnersCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsPartnersCardCollectionOrder>>>;
};


export type AssetLinkingCollectionsBlogCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsBlogCollectionOrder>>>;
};


export type AssetLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsEventCollectionOrder>>>;
};


export type AssetLinkingCollectionsMediaBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsMediaBlockCollectionOrder>>>;
};


export type AssetLinkingCollectionsPressPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsPressPostCollectionOrder>>>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsPersonCollectionOrder>>>;
};


export type AssetLinkingCollectionsLogoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsLogoCollectionOrder>>>;
};


export type AssetLinkingCollectionsListBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<AssetLinkingCollectionsListBlockCollectionOrder>>>;
};

export enum AssetLinkingCollectionsBlogCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsBlogPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsEventCollectionOrder {
  EventTitleAsc = 'eventTitle_ASC',
  EventTitleDesc = 'eventTitle_DESC',
  EventStartDateAsc = 'eventStartDate_ASC',
  EventStartDateDesc = 'eventStartDate_DESC',
  EventEndDateAsc = 'eventEndDate_ASC',
  EventEndDateDesc = 'eventEndDate_DESC',
  EventUrlAsc = 'eventUrl_ASC',
  EventUrlDesc = 'eventUrl_DESC',
  EventLocationAsc = 'eventLocation_ASC',
  EventLocationDesc = 'eventLocation_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsFeaturesCollectionOrder {
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SubIdAsc = 'subId_ASC',
  SubIdDesc = 'subId_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsHomeCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsListBlockCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsLogoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsMediaBlockCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsMetadataCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsPartnersCardCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsPersonCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsPressPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  PublicationNameAsc = 'publicationName_ASC',
  PublicationNameDesc = 'publicationName_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type Blog = Entry & {
  __typename?: 'Blog';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlogLinkingCollections>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
  featuredPost?: Maybe<BlogPost>;
  featuredPostImage?: Maybe<Asset>;
  heroCardBlock?: Maybe<SectionBlock>;
  newsletterCardBlock?: Maybe<SectionBlock>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogFeaturedPostArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogPostFilter>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogFeaturedPostImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogHeroCardBlockArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogNewsletterCardBlockArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
};


/** https://fauna.com/blog [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blog) */
export type BlogHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogCategory) */
export type BlogCategory = Entry & {
  __typename?: 'BlogCategory';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlogCategoryLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogCategory) */
export type BlogCategoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogCategory) */
export type BlogCategoryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogCategory) */
export type BlogCategorySlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type BlogCategoryCollection = {
  __typename?: 'BlogCategoryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogCategory>>;
};

export type BlogCategoryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<BlogCategoryFilter>>>;
  AND?: Maybe<Array<Maybe<BlogCategoryFilter>>>;
};

export type BlogCategoryLinkingCollections = {
  __typename?: 'BlogCategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
};


export type BlogCategoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type BlogCategoryLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<BlogCategoryLinkingCollectionsBlogPostCollectionOrder>>>;
};

export enum BlogCategoryLinkingCollectionsBlogPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlogCategoryOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlogCollection = {
  __typename?: 'BlogCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Blog>>;
};

export type BlogFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  featuredPost?: Maybe<CfBlogPostNestedFilter>;
  heroCardBlock?: Maybe<CfSectionBlockNestedFilter>;
  newsletterCardBlock?: Maybe<CfSectionBlockNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  featuredPost_exists?: Maybe<Scalars['Boolean']>;
  featuredPostImage_exists?: Maybe<Scalars['Boolean']>;
  heroCardBlock_exists?: Maybe<Scalars['Boolean']>;
  newsletterCardBlock_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<BlogFilter>>>;
  AND?: Maybe<Array<Maybe<BlogFilter>>>;
};

export type BlogLinkingCollections = {
  __typename?: 'BlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum BlogOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  additionalSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['DateTime']>;
  coverImage?: Maybe<Asset>;
  thumbnailImage?: Maybe<Asset>;
  categoriesCollection?: Maybe<BlogPostCategoriesCollection>;
  isCommunityPost?: Maybe<Scalars['Boolean']>;
  authorsCollection?: Maybe<BlogPostAuthorsCollection>;
  excerpt?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  body2?: Maybe<Scalars['String']>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
  relatedPostsCollection?: Maybe<BlogPostRelatedPostsCollection>;
  hideFromRelatedPosts?: Maybe<Scalars['Boolean']>;
  canonicalLink?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostAdditionalSlugsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostCoverImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostThumbnailImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostCategoriesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogCategoryFilter>;
  order?: Maybe<Array<Maybe<BlogPostCategoriesCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostIsCommunityPostArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostAuthorsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<Array<Maybe<BlogPostAuthorsCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostExcerptArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostBody2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostLastUpdatedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostRelatedPostsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogPostFilter>;
  order?: Maybe<Array<Maybe<BlogPostRelatedPostsCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostHideFromRelatedPostsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/blogPost) */
export type BlogPostCanonicalLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type BlogPostAuthorsCollection = {
  __typename?: 'BlogPostAuthorsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Person>>;
};

export enum BlogPostAuthorsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlogPostCategoriesCollection = {
  __typename?: 'BlogPostCategoriesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogCategory>>;
};

export enum BlogPostCategoriesCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogPost>>;
};

export type BlogPostFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  categories?: Maybe<CfBlogCategoryNestedFilter>;
  authors?: Maybe<CfPersonNestedFilter>;
  relatedPosts?: Maybe<CfBlogPostNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  additionalSlugs_exists?: Maybe<Scalars['Boolean']>;
  additionalSlugs_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalSlugs_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalSlugs_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  coverImage_exists?: Maybe<Scalars['Boolean']>;
  thumbnailImage_exists?: Maybe<Scalars['Boolean']>;
  categoriesCollection_exists?: Maybe<Scalars['Boolean']>;
  isCommunityPost_exists?: Maybe<Scalars['Boolean']>;
  isCommunityPost?: Maybe<Scalars['Boolean']>;
  isCommunityPost_not?: Maybe<Scalars['Boolean']>;
  authorsCollection_exists?: Maybe<Scalars['Boolean']>;
  excerpt_exists?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  excerpt_not?: Maybe<Scalars['String']>;
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_contains?: Maybe<Scalars['String']>;
  excerpt_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  body2_exists?: Maybe<Scalars['Boolean']>;
  body2?: Maybe<Scalars['String']>;
  body2_not?: Maybe<Scalars['String']>;
  body2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body2_contains?: Maybe<Scalars['String']>;
  body2_not_contains?: Maybe<Scalars['String']>;
  lastUpdated_exists?: Maybe<Scalars['Boolean']>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
  lastUpdated_not?: Maybe<Scalars['DateTime']>;
  lastUpdated_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastUpdated_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastUpdated_gt?: Maybe<Scalars['DateTime']>;
  lastUpdated_gte?: Maybe<Scalars['DateTime']>;
  lastUpdated_lt?: Maybe<Scalars['DateTime']>;
  lastUpdated_lte?: Maybe<Scalars['DateTime']>;
  relatedPostsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts_exists?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts_not?: Maybe<Scalars['Boolean']>;
  canonicalLink_exists?: Maybe<Scalars['Boolean']>;
  canonicalLink?: Maybe<Scalars['String']>;
  canonicalLink_not?: Maybe<Scalars['String']>;
  canonicalLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalLink_contains?: Maybe<Scalars['String']>;
  canonicalLink_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<BlogPostFilter>>>;
  AND?: Maybe<Array<Maybe<BlogPostFilter>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  blogCollection?: Maybe<BlogCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type BlogPostLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<BlogPostLinkingCollectionsSectionCollectionOrder>>>;
};


export type BlogPostLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<BlogPostLinkingCollectionsBlogPostCollectionOrder>>>;
};


export type BlogPostLinkingCollectionsBlogCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<BlogPostLinkingCollectionsBlogCollectionOrder>>>;
};

export enum BlogPostLinkingCollectionsBlogCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlogPostLinkingCollectionsBlogPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlogPostLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlogPostOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BlogPostRelatedPostsCollection = {
  __typename?: 'BlogPostRelatedPostsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogPost>>;
};

export enum BlogPostRelatedPostsCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToAction = Entry & {
  __typename?: 'CallToAction';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CallToActionLinkingCollections>;
  objectName?: Maybe<Scalars['String']>;
  children?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  labelDescription?: Maybe<Scalars['String']>;
  menuCategory?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionObjectNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionChildrenArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionHrefArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionIconArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionLabelDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A link or call to action. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/callToAction) */
export type CallToActionMenuCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CallToActionCollection = {
  __typename?: 'CallToActionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export type CallToActionFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  href_exists?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  href_not?: Maybe<Scalars['String']>;
  href_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_contains?: Maybe<Scalars['String']>;
  href_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  labelDescription_exists?: Maybe<Scalars['Boolean']>;
  labelDescription?: Maybe<Scalars['String']>;
  labelDescription_not?: Maybe<Scalars['String']>;
  labelDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  labelDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  labelDescription_contains?: Maybe<Scalars['String']>;
  labelDescription_not_contains?: Maybe<Scalars['String']>;
  menuCategory_exists?: Maybe<Scalars['Boolean']>;
  menuCategory?: Maybe<Scalars['String']>;
  menuCategory_not?: Maybe<Scalars['String']>;
  menuCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  menuCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  menuCategory_contains?: Maybe<Scalars['String']>;
  menuCategory_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CallToActionFilter>>>;
  AND?: Maybe<Array<Maybe<CallToActionFilter>>>;
};

export type CallToActionLinkingCollections = {
  __typename?: 'CallToActionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  customerCollection?: Maybe<CustomerCollection>;
  pageTrustCollection?: Maybe<PageTrustCollection>;
  partnersCardCollection?: Maybe<PartnersCardCollection>;
  pricingPlanV2Collection?: Maybe<PricingPlanV2Collection>;
  pagePricingCollection?: Maybe<PagePricingCollection>;
  learnCollection?: Maybe<LearnCollection>;
  pageEventsCollection?: Maybe<PageEventsCollection>;
  pageCustomersCollection?: Maybe<PageCustomersCollection>;
  communityCollection?: Maybe<CommunityCollection>;
  pageCareersCollection?: Maybe<PageCareersCollection>;
  logosCollectionCollection?: Maybe<LogosCollectionCollection>;
  pricingPlanCollection?: Maybe<PricingPlanCollection>;
  mediaBlockCollection?: Maybe<MediaBlockCollection>;
  pressPostCollection?: Maybe<PressPostCollection>;
  quote2Collection?: Maybe<Quote2Collection>;
  logoCollection?: Maybe<LogoCollection>;
  listBlockCollection?: Maybe<ListBlockCollection>;
  navLinkCollection?: Maybe<NavLinkCollection>;
  topNotificationCollection?: Maybe<TopNotificationCollection>;
};


export type CallToActionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CallToActionLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsHomeCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsSectionCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsSectionBlockCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsCustomerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsCustomerCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPageTrustCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPageTrustCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPartnersCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPartnersCardCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPricingPlanV2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPricingPlanV2CollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPagePricingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPagePricingCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsLearnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsLearnCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPageEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPageEventsCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPageCustomersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPageCustomersCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsCommunityCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsCommunityCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPageCareersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPageCareersCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsLogosCollectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsLogosCollectionCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPricingPlanCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPricingPlanCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsMediaBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsMediaBlockCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsPressPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsPressPostCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsQuote2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsQuote2CollectionOrder>>>;
};


export type CallToActionLinkingCollectionsLogoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsLogoCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsListBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsListBlockCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsNavLinkCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsNavLinkCollectionOrder>>>;
};


export type CallToActionLinkingCollectionsTopNotificationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CallToActionLinkingCollectionsTopNotificationCollectionOrder>>>;
};

export enum CallToActionLinkingCollectionsCommunityCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsCustomerCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsHomeCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsLearnCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsListBlockCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsLogoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsLogosCollectionCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsMediaBlockCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsNavLinkCollectionOrder {
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPageCareersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPageCustomersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPageEventsCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPagePricingCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  VariantWeightAsc = 'variantWeight_ASC',
  VariantWeightDesc = 'variantWeight_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  ComingSoonTextAsc = 'comingSoonText_ASC',
  ComingSoonTextDesc = 'comingSoonText_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPageTrustCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPartnersCardCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPressPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  PublicationNameAsc = 'publicationName_ASC',
  PublicationNameDesc = 'publicationName_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPricingPlanCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsPricingPlanV2CollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  AnnualPriceLabelAsc = 'annualPriceLabel_ASC',
  AnnualPriceLabelDesc = 'annualPriceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsQuote2CollectionOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionLinkingCollectionsTopNotificationCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CallToActionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A column for a table. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/column) */
export type Column = Entry & {
  __typename?: 'Column';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ColumnLinkingCollections>;
  head?: Maybe<Scalars['String']>;
  rowsCollection?: Maybe<ColumnRowsCollection>;
  widthPercentage?: Maybe<Scalars['Int']>;
};


/** A column for a table. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/column) */
export type ColumnLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A column for a table. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/column) */
export type ColumnHeadArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A column for a table. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/column) */
export type ColumnRowsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ColumnRowsFilter>;
};


/** A column for a table. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/column) */
export type ColumnWidthPercentageArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ColumnCollection = {
  __typename?: 'ColumnCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Column>>;
};

export type ColumnFilter = {
  rows?: Maybe<CfrowsMultiTypeNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  head_exists?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  head_not?: Maybe<Scalars['String']>;
  head_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  head_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  head_contains?: Maybe<Scalars['String']>;
  head_not_contains?: Maybe<Scalars['String']>;
  rowsCollection_exists?: Maybe<Scalars['Boolean']>;
  widthPercentage_exists?: Maybe<Scalars['Boolean']>;
  widthPercentage?: Maybe<Scalars['Int']>;
  widthPercentage_not?: Maybe<Scalars['Int']>;
  widthPercentage_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  widthPercentage_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  widthPercentage_gt?: Maybe<Scalars['Int']>;
  widthPercentage_gte?: Maybe<Scalars['Int']>;
  widthPercentage_lt?: Maybe<Scalars['Int']>;
  widthPercentage_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<ColumnFilter>>>;
  AND?: Maybe<Array<Maybe<ColumnFilter>>>;
};

export type ColumnLinkingCollections = {
  __typename?: 'ColumnLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ColumnLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ColumnLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ColumnLinkingCollectionsSectionCollectionOrder>>>;
};

export enum ColumnLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnOrder {
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  WidthPercentageAsc = 'widthPercentage_ASC',
  WidthPercentageDesc = 'widthPercentage_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ColumnRowsCollection = {
  __typename?: 'ColumnRowsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ColumnRowsItem>>;
};

export type ColumnRowsFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ColumnRowsFilter>>>;
  AND?: Maybe<Array<Maybe<ColumnRowsFilter>>>;
};

export type ColumnRowsItem = Description | DescriptionMarkdown;

/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type Community = Entry & {
  __typename?: 'Community';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CommunityLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<CommunityHeroSubtitle>;
  heroActionsCollection?: Maybe<CommunityHeroActionsCollection>;
  sectionsCollection?: Maybe<CommunitySectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<CommunityHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunitySectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<CommunitySectionsCollectionOrder>>>;
};


/** https://fauna.com/community [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/community) */
export type CommunityHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CommunityCollection = {
  __typename?: 'CommunityCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Community>>;
};

export type CommunityFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CommunityFilter>>>;
  AND?: Maybe<Array<Maybe<CommunityFilter>>>;
};

export type CommunityHeroActionsCollection = {
  __typename?: 'CommunityHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum CommunityHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CommunityHeroSubtitle = {
  __typename?: 'CommunityHeroSubtitle';
  json: Scalars['JSON'];
  links: CommunityHeroSubtitleLinks;
};

export type CommunityHeroSubtitleAssets = {
  __typename?: 'CommunityHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CommunityHeroSubtitleEntries = {
  __typename?: 'CommunityHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CommunityHeroSubtitleLinks = {
  __typename?: 'CommunityHeroSubtitleLinks';
  entries: CommunityHeroSubtitleEntries;
  assets: CommunityHeroSubtitleAssets;
  resources: CommunityHeroSubtitleResources;
};

export type CommunityHeroSubtitleResources = {
  __typename?: 'CommunityHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type CommunityLinkingCollections = {
  __typename?: 'CommunityLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CommunityLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CommunityOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CommunitySectionsCollection = {
  __typename?: 'CommunitySectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum CommunitySectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type Company = Entry & {
  __typename?: 'Company';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CompanyLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<CompanyHeroSubtitle>;
  sectionsCollection?: Maybe<CompanySectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanySectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<CompanySectionsCollectionOrder>>>;
};


/** https://fauna.com/about [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/company) */
export type CompanyHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CompanyCollection = {
  __typename?: 'CompanyCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Company>>;
};

export type CompanyFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CompanyFilter>>>;
  AND?: Maybe<Array<Maybe<CompanyFilter>>>;
};

export type CompanyHeroSubtitle = {
  __typename?: 'CompanyHeroSubtitle';
  json: Scalars['JSON'];
  links: CompanyHeroSubtitleLinks;
};

export type CompanyHeroSubtitleAssets = {
  __typename?: 'CompanyHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CompanyHeroSubtitleEntries = {
  __typename?: 'CompanyHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CompanyHeroSubtitleLinks = {
  __typename?: 'CompanyHeroSubtitleLinks';
  entries: CompanyHeroSubtitleEntries;
  assets: CompanyHeroSubtitleAssets;
  resources: CompanyHeroSubtitleResources;
};

export type CompanyHeroSubtitleResources = {
  __typename?: 'CompanyHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type CompanyLinkingCollections = {
  __typename?: 'CompanyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CompanyLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CompanyOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CompanySectionsCollection = {
  __typename?: 'CompanySectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum CompanySectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type Customer = Entry & {
  __typename?: 'Customer';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CustomerLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<CustomerDescription>;
  actionsCollection?: Maybe<CustomerActionsCollection>;
  logo?: Maybe<Logo>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type CustomerLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type CustomerNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type CustomerDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type CustomerActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<CustomerActionsCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/customer) */
export type CustomerLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogoFilter>;
};

export type CustomerActionsCollection = {
  __typename?: 'CustomerActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum CustomerActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CustomerCollection = {
  __typename?: 'CustomerCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Customer>>;
};

export type CustomerDescription = {
  __typename?: 'CustomerDescription';
  json: Scalars['JSON'];
  links: CustomerDescriptionLinks;
};

export type CustomerDescriptionAssets = {
  __typename?: 'CustomerDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CustomerDescriptionEntries = {
  __typename?: 'CustomerDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CustomerDescriptionLinks = {
  __typename?: 'CustomerDescriptionLinks';
  entries: CustomerDescriptionEntries;
  assets: CustomerDescriptionAssets;
  resources: CustomerDescriptionResources;
};

export type CustomerDescriptionResources = {
  __typename?: 'CustomerDescriptionResources';
  block: Array<ResourceLink>;
};

export type CustomerFilter = {
  actions?: Maybe<CfCallToActionNestedFilter>;
  logo?: Maybe<CfLogoNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  logo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CustomerFilter>>>;
  AND?: Maybe<Array<Maybe<CustomerFilter>>>;
};

export type CustomerLinkingCollections = {
  __typename?: 'CustomerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type CustomerLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CustomerLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CustomerLinkingCollectionsSectionCollectionOrder>>>;
};

export enum CustomerLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CustomerOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


/** Just a piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/description) */
export type Description = Entry & {
  __typename?: 'Description';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DescriptionLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<DescriptionText>;
};


/** Just a piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/description) */
export type DescriptionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Just a piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/description) */
export type DescriptionNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Just a piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/description) */
export type DescriptionTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type DescriptionCollection = {
  __typename?: 'DescriptionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Description>>;
};

export type DescriptionFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  text_exists?: Maybe<Scalars['Boolean']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<DescriptionFilter>>>;
  AND?: Maybe<Array<Maybe<DescriptionFilter>>>;
};

export type DescriptionLinkingCollections = {
  __typename?: 'DescriptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  columnCollection?: Maybe<ColumnCollection>;
};


export type DescriptionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DescriptionLinkingCollectionsColumnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<DescriptionLinkingCollectionsColumnCollectionOrder>>>;
};

export enum DescriptionLinkingCollectionsColumnCollectionOrder {
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  WidthPercentageAsc = 'widthPercentage_ASC',
  WidthPercentageDesc = 'widthPercentage_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Just a markdown piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/descriptionMarkdown) */
export type DescriptionMarkdown = Entry & {
  __typename?: 'DescriptionMarkdown';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DescriptionMarkdownLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


/** Just a markdown piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/descriptionMarkdown) */
export type DescriptionMarkdownLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Just a markdown piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/descriptionMarkdown) */
export type DescriptionMarkdownNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Just a markdown piece of text. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/descriptionMarkdown) */
export type DescriptionMarkdownDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type DescriptionMarkdownCollection = {
  __typename?: 'DescriptionMarkdownCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<DescriptionMarkdown>>;
};

export type DescriptionMarkdownFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<DescriptionMarkdownFilter>>>;
  AND?: Maybe<Array<Maybe<DescriptionMarkdownFilter>>>;
};

export type DescriptionMarkdownLinkingCollections = {
  __typename?: 'DescriptionMarkdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  columnCollection?: Maybe<ColumnCollection>;
};


export type DescriptionMarkdownLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DescriptionMarkdownLinkingCollectionsColumnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<DescriptionMarkdownLinkingCollectionsColumnCollectionOrder>>>;
};

export enum DescriptionMarkdownLinkingCollectionsColumnCollectionOrder {
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  WidthPercentageAsc = 'widthPercentage_ASC',
  WidthPercentageDesc = 'widthPercentage_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DescriptionMarkdownOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DescriptionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type DescriptionText = {
  __typename?: 'DescriptionText';
  json: Scalars['JSON'];
  links: DescriptionTextLinks;
};

export type DescriptionTextAssets = {
  __typename?: 'DescriptionTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type DescriptionTextEntries = {
  __typename?: 'DescriptionTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type DescriptionTextLinks = {
  __typename?: 'DescriptionTextLinks';
  entries: DescriptionTextEntries;
  assets: DescriptionTextAssets;
  resources: DescriptionTextResources;
};

export type DescriptionTextResources = {
  __typename?: 'DescriptionTextResources';
  block: Array<ResourceLink>;
};


export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type Event = Entry & {
  __typename?: 'Event';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<EventLinkingCollections>;
  eventTitle?: Maybe<Scalars['String']>;
  eventDescription?: Maybe<EventEventDescription>;
  featuredImage?: Maybe<Asset>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventUrl?: Maybe<Scalars['String']>;
  eventLocation?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventStartDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventEndDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/event) */
export type EventEventLocationArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Event>>;
};

export type EventEventDescription = {
  __typename?: 'EventEventDescription';
  json: Scalars['JSON'];
  links: EventEventDescriptionLinks;
};

export type EventEventDescriptionAssets = {
  __typename?: 'EventEventDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type EventEventDescriptionEntries = {
  __typename?: 'EventEventDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type EventEventDescriptionLinks = {
  __typename?: 'EventEventDescriptionLinks';
  entries: EventEventDescriptionEntries;
  assets: EventEventDescriptionAssets;
  resources: EventEventDescriptionResources;
};

export type EventEventDescriptionResources = {
  __typename?: 'EventEventDescriptionResources';
  block: Array<ResourceLink>;
};

export type EventFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  eventTitle_exists?: Maybe<Scalars['Boolean']>;
  eventTitle?: Maybe<Scalars['String']>;
  eventTitle_not?: Maybe<Scalars['String']>;
  eventTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventTitle_contains?: Maybe<Scalars['String']>;
  eventTitle_not_contains?: Maybe<Scalars['String']>;
  eventDescription_exists?: Maybe<Scalars['Boolean']>;
  eventDescription_contains?: Maybe<Scalars['String']>;
  eventDescription_not_contains?: Maybe<Scalars['String']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  eventStartDate_exists?: Maybe<Scalars['Boolean']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  eventStartDate_not?: Maybe<Scalars['DateTime']>;
  eventStartDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventStartDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventStartDate_gt?: Maybe<Scalars['DateTime']>;
  eventStartDate_gte?: Maybe<Scalars['DateTime']>;
  eventStartDate_lt?: Maybe<Scalars['DateTime']>;
  eventStartDate_lte?: Maybe<Scalars['DateTime']>;
  eventEndDate_exists?: Maybe<Scalars['Boolean']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventEndDate_not?: Maybe<Scalars['DateTime']>;
  eventEndDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventEndDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventEndDate_gt?: Maybe<Scalars['DateTime']>;
  eventEndDate_gte?: Maybe<Scalars['DateTime']>;
  eventEndDate_lt?: Maybe<Scalars['DateTime']>;
  eventEndDate_lte?: Maybe<Scalars['DateTime']>;
  eventUrl_exists?: Maybe<Scalars['Boolean']>;
  eventUrl?: Maybe<Scalars['String']>;
  eventUrl_not?: Maybe<Scalars['String']>;
  eventUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventUrl_contains?: Maybe<Scalars['String']>;
  eventUrl_not_contains?: Maybe<Scalars['String']>;
  eventLocation_exists?: Maybe<Scalars['Boolean']>;
  eventLocation?: Maybe<Scalars['String']>;
  eventLocation_not?: Maybe<Scalars['String']>;
  eventLocation_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLocation_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLocation_contains?: Maybe<Scalars['String']>;
  eventLocation_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<EventFilter>>>;
  AND?: Maybe<Array<Maybe<EventFilter>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type EventLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<EventLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type EventLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<EventLinkingCollectionsSectionCollectionOrder>>>;
};

export enum EventLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EventLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EventOrder {
  EventTitleAsc = 'eventTitle_ASC',
  EventTitleDesc = 'eventTitle_DESC',
  EventStartDateAsc = 'eventStartDate_ASC',
  EventStartDateDesc = 'eventStartDate_DESC',
  EventEndDateAsc = 'eventEndDate_ASC',
  EventEndDateDesc = 'eventEndDate_DESC',
  EventUrlAsc = 'eventUrl_ASC',
  EventUrlDesc = 'eventUrl_DESC',
  EventLocationAsc = 'eventLocation_ASC',
  EventLocationDesc = 'eventLocation_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type Features = Entry & {
  __typename?: 'Features';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FeaturesLinkingCollections>;
  metadata?: Maybe<Metadata>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<FeaturesHeroSubtitle>;
  heroImage?: Maybe<Asset>;
  sectionsCollection?: Maybe<FeaturesSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  subId?: Maybe<Scalars['String']>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<FeaturesSectionsCollectionOrder>>>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/features [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/features) */
export type FeaturesSubIdArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type FeaturesCollection = {
  __typename?: 'FeaturesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Features>>;
};

export type FeaturesFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  subId_exists?: Maybe<Scalars['Boolean']>;
  subId?: Maybe<Scalars['String']>;
  subId_not?: Maybe<Scalars['String']>;
  subId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subId_contains?: Maybe<Scalars['String']>;
  subId_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<FeaturesFilter>>>;
  AND?: Maybe<Array<Maybe<FeaturesFilter>>>;
};

export type FeaturesHeroSubtitle = {
  __typename?: 'FeaturesHeroSubtitle';
  json: Scalars['JSON'];
  links: FeaturesHeroSubtitleLinks;
};

export type FeaturesHeroSubtitleAssets = {
  __typename?: 'FeaturesHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type FeaturesHeroSubtitleEntries = {
  __typename?: 'FeaturesHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type FeaturesHeroSubtitleLinks = {
  __typename?: 'FeaturesHeroSubtitleLinks';
  entries: FeaturesHeroSubtitleEntries;
  assets: FeaturesHeroSubtitleAssets;
  resources: FeaturesHeroSubtitleResources;
};

export type FeaturesHeroSubtitleResources = {
  __typename?: 'FeaturesHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type FeaturesLinkingCollections = {
  __typename?: 'FeaturesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FeaturesLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum FeaturesOrder {
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SubIdAsc = 'subId_ASC',
  SubIdDesc = 'subId_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FeaturesSectionsCollection = {
  __typename?: 'FeaturesSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum FeaturesSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type Form = Entry & {
  __typename?: 'Form';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FormLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  actionUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Scalars['JSON']>;
  buttonLabel?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type FormLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type FormTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type FormActionUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type FormFieldsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/form) */
export type FormButtonLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Form>>;
};

export type FormFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  actionUrl_exists?: Maybe<Scalars['Boolean']>;
  actionUrl?: Maybe<Scalars['String']>;
  actionUrl_not?: Maybe<Scalars['String']>;
  actionUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionUrl_contains?: Maybe<Scalars['String']>;
  actionUrl_not_contains?: Maybe<Scalars['String']>;
  fields_exists?: Maybe<Scalars['Boolean']>;
  buttonLabel_exists?: Maybe<Scalars['Boolean']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonLabel_not?: Maybe<Scalars['String']>;
  buttonLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonLabel_contains?: Maybe<Scalars['String']>;
  buttonLabel_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<FormFilter>>>;
  AND?: Maybe<Array<Maybe<FormFilter>>>;
};

export type FormLinkingCollections = {
  __typename?: 'FormLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
};


export type FormLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FormLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<FormLinkingCollectionsSectionCollectionOrder>>>;
};


export type FormLinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<FormLinkingCollectionsSectionBlockCollectionOrder>>>;
};

export enum FormLinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ActionUrlAsc = 'actionUrl_ASC',
  ActionUrlDesc = 'actionUrl_DESC',
  ButtonLabelAsc = 'buttonLabel_ASC',
  ButtonLabelDesc = 'buttonLabel_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralData = Entry & {
  __typename?: 'GeneralData';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GeneralDataLinkingCollections>;
  contentName?: Maybe<Scalars['String']>;
  logo?: Maybe<Asset>;
  logoInPng?: Maybe<Asset>;
  favicon?: Maybe<Asset>;
  faviconDarkMode?: Maybe<Asset>;
  defaultMetadata?: Maybe<Metadata>;
  navCenterLinksCollection?: Maybe<GeneralDataNavCenterLinksCollection>;
  navRightLinksCollection?: Maybe<GeneralDataNavRightLinksCollection>;
  topNotification?: Maybe<TopNotification>;
  footerLinksListsCollection?: Maybe<GeneralDataFooterLinksListsCollection>;
  copyrightMessage?: Maybe<Scalars['String']>;
  statusLink?: Maybe<CallToAction>;
  footerRightSideLinksCollection?: Maybe<GeneralDataFooterRightSideLinksCollection>;
  socialMedia?: Maybe<SocialMedia>;
  blogPostFooterText?: Maybe<GeneralDataBlogPostFooterText>;
  blogPostNewsletterBlock?: Maybe<SectionBlock>;
  pricingPageTotalLabel?: Maybe<Scalars['String']>;
  navMenuLinksCollection?: Maybe<GeneralDataNavMenuLinksCollection>;
  blogSignUpCardText?: Maybe<Scalars['String']>;
  blogSignUpCardImage?: Maybe<Asset>;
  blogSignUpCardLink?: Maybe<CallToAction>;
  blogReqADemoCardText?: Maybe<Scalars['String']>;
  blogReqADemoCardImage?: Maybe<Asset>;
  blogReqADemoCardLink?: Maybe<CallToAction>;
  sufhCookieDomain?: Maybe<Scalars['String']>;
  sufhApiUrl?: Maybe<Scalars['String']>;
  sufhDashboardUrl?: Maybe<Scalars['String']>;
  sufhCaptchaKey?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataContentNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataLogoInPngArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataFaviconArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataFaviconDarkModeArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataDefaultMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataNavCenterLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<GeneralDataNavCenterLinksFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataNavRightLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<GeneralDataNavRightLinksFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataTopNotificationArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<TopNotificationFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataFooterLinksListsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavLinkFilter>;
  order?: Maybe<Array<Maybe<GeneralDataFooterLinksListsCollectionOrder>>>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataCopyrightMessageArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataStatusLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataFooterRightSideLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<GeneralDataFooterRightSideLinksCollectionOrder>>>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataSocialMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SocialMediaFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogPostFooterTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogPostNewsletterBlockArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataPricingPageTotalLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataNavMenuLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<GeneralDataNavMenuLinksFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogSignUpCardTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogSignUpCardImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogSignUpCardLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogReqADemoCardTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogReqADemoCardImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataBlogReqADemoCardLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataSufhCookieDomainArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataSufhApiUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataSufhDashboardUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For navigation links, default metadata, and more. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/generalData) */
export type GeneralDataSufhCaptchaKeyArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type GeneralDataBlogPostFooterText = {
  __typename?: 'GeneralDataBlogPostFooterText';
  json: Scalars['JSON'];
  links: GeneralDataBlogPostFooterTextLinks;
};

export type GeneralDataBlogPostFooterTextAssets = {
  __typename?: 'GeneralDataBlogPostFooterTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type GeneralDataBlogPostFooterTextEntries = {
  __typename?: 'GeneralDataBlogPostFooterTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type GeneralDataBlogPostFooterTextLinks = {
  __typename?: 'GeneralDataBlogPostFooterTextLinks';
  entries: GeneralDataBlogPostFooterTextEntries;
  assets: GeneralDataBlogPostFooterTextAssets;
  resources: GeneralDataBlogPostFooterTextResources;
};

export type GeneralDataBlogPostFooterTextResources = {
  __typename?: 'GeneralDataBlogPostFooterTextResources';
  block: Array<ResourceLink>;
};

export type GeneralDataCollection = {
  __typename?: 'GeneralDataCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<GeneralData>>;
};

export type GeneralDataFilter = {
  defaultMetadata?: Maybe<CfMetadataNestedFilter>;
  navCenterLinks?: Maybe<CfnavCenterLinksMultiTypeNestedFilter>;
  navRightLinks?: Maybe<CfnavRightLinksMultiTypeNestedFilter>;
  topNotification?: Maybe<CfTopNotificationNestedFilter>;
  footerLinksLists?: Maybe<CfNavLinkNestedFilter>;
  statusLink?: Maybe<CfCallToActionNestedFilter>;
  footerRightSideLinks?: Maybe<CfCallToActionNestedFilter>;
  socialMedia?: Maybe<CfSocialMediaNestedFilter>;
  blogPostNewsletterBlock?: Maybe<CfSectionBlockNestedFilter>;
  navMenuLinks?: Maybe<CfnavMenuLinksMultiTypeNestedFilter>;
  blogSignUpCardLink?: Maybe<CfCallToActionNestedFilter>;
  blogReqADemoCardLink?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  contentName_exists?: Maybe<Scalars['Boolean']>;
  contentName?: Maybe<Scalars['String']>;
  contentName_not?: Maybe<Scalars['String']>;
  contentName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentName_contains?: Maybe<Scalars['String']>;
  contentName_not_contains?: Maybe<Scalars['String']>;
  logo_exists?: Maybe<Scalars['Boolean']>;
  logoInPng_exists?: Maybe<Scalars['Boolean']>;
  favicon_exists?: Maybe<Scalars['Boolean']>;
  faviconDarkMode_exists?: Maybe<Scalars['Boolean']>;
  defaultMetadata_exists?: Maybe<Scalars['Boolean']>;
  navCenterLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  navRightLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  topNotification_exists?: Maybe<Scalars['Boolean']>;
  footerLinksListsCollection_exists?: Maybe<Scalars['Boolean']>;
  copyrightMessage_exists?: Maybe<Scalars['Boolean']>;
  copyrightMessage?: Maybe<Scalars['String']>;
  copyrightMessage_not?: Maybe<Scalars['String']>;
  copyrightMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  copyrightMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  copyrightMessage_contains?: Maybe<Scalars['String']>;
  copyrightMessage_not_contains?: Maybe<Scalars['String']>;
  statusLink_exists?: Maybe<Scalars['Boolean']>;
  footerRightSideLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  socialMedia_exists?: Maybe<Scalars['Boolean']>;
  blogPostFooterText_exists?: Maybe<Scalars['Boolean']>;
  blogPostFooterText_contains?: Maybe<Scalars['String']>;
  blogPostFooterText_not_contains?: Maybe<Scalars['String']>;
  blogPostNewsletterBlock_exists?: Maybe<Scalars['Boolean']>;
  pricingPageTotalLabel_exists?: Maybe<Scalars['Boolean']>;
  pricingPageTotalLabel?: Maybe<Scalars['String']>;
  pricingPageTotalLabel_not?: Maybe<Scalars['String']>;
  pricingPageTotalLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pricingPageTotalLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pricingPageTotalLabel_contains?: Maybe<Scalars['String']>;
  pricingPageTotalLabel_not_contains?: Maybe<Scalars['String']>;
  navMenuLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  blogSignUpCardText_exists?: Maybe<Scalars['Boolean']>;
  blogSignUpCardText?: Maybe<Scalars['String']>;
  blogSignUpCardText_not?: Maybe<Scalars['String']>;
  blogSignUpCardText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blogSignUpCardText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blogSignUpCardText_contains?: Maybe<Scalars['String']>;
  blogSignUpCardText_not_contains?: Maybe<Scalars['String']>;
  blogSignUpCardImage_exists?: Maybe<Scalars['Boolean']>;
  blogSignUpCardLink_exists?: Maybe<Scalars['Boolean']>;
  blogReqADemoCardText_exists?: Maybe<Scalars['Boolean']>;
  blogReqADemoCardText?: Maybe<Scalars['String']>;
  blogReqADemoCardText_not?: Maybe<Scalars['String']>;
  blogReqADemoCardText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blogReqADemoCardText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blogReqADemoCardText_contains?: Maybe<Scalars['String']>;
  blogReqADemoCardText_not_contains?: Maybe<Scalars['String']>;
  blogReqADemoCardImage_exists?: Maybe<Scalars['Boolean']>;
  blogReqADemoCardLink_exists?: Maybe<Scalars['Boolean']>;
  sufhCookieDomain_exists?: Maybe<Scalars['Boolean']>;
  sufhCookieDomain?: Maybe<Scalars['String']>;
  sufhCookieDomain_not?: Maybe<Scalars['String']>;
  sufhCookieDomain_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhCookieDomain_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhCookieDomain_contains?: Maybe<Scalars['String']>;
  sufhCookieDomain_not_contains?: Maybe<Scalars['String']>;
  sufhApiUrl_exists?: Maybe<Scalars['Boolean']>;
  sufhApiUrl?: Maybe<Scalars['String']>;
  sufhApiUrl_not?: Maybe<Scalars['String']>;
  sufhApiUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhApiUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhApiUrl_contains?: Maybe<Scalars['String']>;
  sufhApiUrl_not_contains?: Maybe<Scalars['String']>;
  sufhDashboardUrl_exists?: Maybe<Scalars['Boolean']>;
  sufhDashboardUrl?: Maybe<Scalars['String']>;
  sufhDashboardUrl_not?: Maybe<Scalars['String']>;
  sufhDashboardUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhDashboardUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhDashboardUrl_contains?: Maybe<Scalars['String']>;
  sufhDashboardUrl_not_contains?: Maybe<Scalars['String']>;
  sufhCaptchaKey_exists?: Maybe<Scalars['Boolean']>;
  sufhCaptchaKey?: Maybe<Scalars['String']>;
  sufhCaptchaKey_not?: Maybe<Scalars['String']>;
  sufhCaptchaKey_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhCaptchaKey_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sufhCaptchaKey_contains?: Maybe<Scalars['String']>;
  sufhCaptchaKey_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<GeneralDataFilter>>>;
  AND?: Maybe<Array<Maybe<GeneralDataFilter>>>;
};

export type GeneralDataFooterLinksListsCollection = {
  __typename?: 'GeneralDataFooterLinksListsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
};

export enum GeneralDataFooterLinksListsCollectionOrder {
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type GeneralDataFooterRightSideLinksCollection = {
  __typename?: 'GeneralDataFooterRightSideLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum GeneralDataFooterRightSideLinksCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type GeneralDataLinkingCollections = {
  __typename?: 'GeneralDataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GeneralDataLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type GeneralDataNavCenterLinksCollection = {
  __typename?: 'GeneralDataNavCenterLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<GeneralDataNavCenterLinksItem>>;
};

export type GeneralDataNavCenterLinksFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<GeneralDataNavCenterLinksFilter>>>;
  AND?: Maybe<Array<Maybe<GeneralDataNavCenterLinksFilter>>>;
};

export type GeneralDataNavCenterLinksItem = CallToAction | NavLink;

export type GeneralDataNavMenuLinksCollection = {
  __typename?: 'GeneralDataNavMenuLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<GeneralDataNavMenuLinksItem>>;
};

export type GeneralDataNavMenuLinksFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<GeneralDataNavMenuLinksFilter>>>;
  AND?: Maybe<Array<Maybe<GeneralDataNavMenuLinksFilter>>>;
};

export type GeneralDataNavMenuLinksItem = CallToAction | NavLink;

export type GeneralDataNavRightLinksCollection = {
  __typename?: 'GeneralDataNavRightLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<GeneralDataNavRightLinksItem>>;
};

export type GeneralDataNavRightLinksFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<GeneralDataNavRightLinksFilter>>>;
  AND?: Maybe<Array<Maybe<GeneralDataNavRightLinksFilter>>>;
};

export type GeneralDataNavRightLinksItem = CallToAction | NavLink;

export enum GeneralDataOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<HomeHeroSubtitle>;
  heroActionsCollection?: Maybe<HomeHeroActionsCollection>;
  companies?: Maybe<LogosCollection>;
  sectionsCollection?: Maybe<HomeSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<Asset>;
  version?: Maybe<Scalars['String']>;
  useBuilder?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomePageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<HomeHeroActionsCollectionOrder>>>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeCompaniesArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogosCollectionFilter>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<HomeSectionsCollectionOrder>>>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeVersionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/home) */
export type HomeUseBuilderArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Home>>;
};

export type HomeFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  companies?: Maybe<CfLogosCollectionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  companies_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  version_exists?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['String']>;
  version_not?: Maybe<Scalars['String']>;
  version_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  version_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  version_contains?: Maybe<Scalars['String']>;
  version_not_contains?: Maybe<Scalars['String']>;
  useBuilder_exists?: Maybe<Scalars['Boolean']>;
  useBuilder?: Maybe<Scalars['Boolean']>;
  useBuilder_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<HomeFilter>>>;
  AND?: Maybe<Array<Maybe<HomeFilter>>>;
};

export type HomeHeroActionsCollection = {
  __typename?: 'HomeHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum HomeHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomeHeroSubtitle = {
  __typename?: 'HomeHeroSubtitle';
  json: Scalars['JSON'];
  links: HomeHeroSubtitleLinks;
};

export type HomeHeroSubtitleAssets = {
  __typename?: 'HomeHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type HomeHeroSubtitleEntries = {
  __typename?: 'HomeHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomeHeroSubtitleLinks = {
  __typename?: 'HomeHeroSubtitleLinks';
  entries: HomeHeroSubtitleEntries;
  assets: HomeHeroSubtitleAssets;
  resources: HomeHeroSubtitleResources;
};

export type HomeHeroSubtitleResources = {
  __typename?: 'HomeHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HomeOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomeSectionsCollection = {
  __typename?: 'HomeSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum HomeSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type Learn = Entry & {
  __typename?: 'Learn';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LearnLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<LearnHeroSubtitle>;
  heroActionsCollection?: Maybe<LearnHeroActionsCollection>;
  sectionsCollection?: Maybe<LearnSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<LearnHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<LearnSectionsCollectionOrder>>>;
};


/** https://fauna.com/resources [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/learn) */
export type LearnHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type LearnCollection = {
  __typename?: 'LearnCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Learn>>;
};

export type LearnFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<LearnFilter>>>;
  AND?: Maybe<Array<Maybe<LearnFilter>>>;
};

export type LearnHeroActionsCollection = {
  __typename?: 'LearnHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum LearnHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LearnHeroSubtitle = {
  __typename?: 'LearnHeroSubtitle';
  json: Scalars['JSON'];
  links: LearnHeroSubtitleLinks;
};

export type LearnHeroSubtitleAssets = {
  __typename?: 'LearnHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type LearnHeroSubtitleEntries = {
  __typename?: 'LearnHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type LearnHeroSubtitleLinks = {
  __typename?: 'LearnHeroSubtitleLinks';
  entries: LearnHeroSubtitleEntries;
  assets: LearnHeroSubtitleAssets;
  resources: LearnHeroSubtitleResources;
};

export type LearnHeroSubtitleResources = {
  __typename?: 'LearnHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type LearnLinkingCollections = {
  __typename?: 'LearnLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LearnLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum LearnOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LearnSectionsCollection = {
  __typename?: 'LearnSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum LearnSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/list) */
export type List = Entry & {
  __typename?: 'List';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ListLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/list) */
export type ListLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/list) */
export type ListTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/list) */
export type ListItemsArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlock = Entry & {
  __typename?: 'ListBlock';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ListBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<ListBlockSubtitle>;
  listItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionsCollection?: Maybe<ListBlockActionsCollection>;
  media?: Maybe<Asset>;
  icon?: Maybe<Scalars['String']>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockListItemsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<ListBlockActionsCollectionOrder>>>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Like a Section Block, but with a field for list items. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/listBlock) */
export type ListBlockIconArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ListBlockActionsCollection = {
  __typename?: 'ListBlockActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum ListBlockActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ListBlockCollection = {
  __typename?: 'ListBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ListBlock>>;
};

export type ListBlockFilter = {
  actions?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  listItems_exists?: Maybe<Scalars['Boolean']>;
  listItems_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  listItems_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  listItems_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  media_exists?: Maybe<Scalars['Boolean']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ListBlockFilter>>>;
  AND?: Maybe<Array<Maybe<ListBlockFilter>>>;
};

export type ListBlockLinkingCollections = {
  __typename?: 'ListBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ListBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ListBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ListBlockLinkingCollectionsSectionCollectionOrder>>>;
};

export enum ListBlockLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ListBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ListBlockSubtitle = {
  __typename?: 'ListBlockSubtitle';
  json: Scalars['JSON'];
  links: ListBlockSubtitleLinks;
};

export type ListBlockSubtitleAssets = {
  __typename?: 'ListBlockSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type ListBlockSubtitleEntries = {
  __typename?: 'ListBlockSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ListBlockSubtitleLinks = {
  __typename?: 'ListBlockSubtitleLinks';
  entries: ListBlockSubtitleEntries;
  assets: ListBlockSubtitleAssets;
  resources: ListBlockSubtitleResources;
};

export type ListBlockSubtitleResources = {
  __typename?: 'ListBlockSubtitleResources';
  block: Array<ResourceLink>;
};

export type ListCollection = {
  __typename?: 'ListCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<List>>;
};

export type ListFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  items_exists?: Maybe<Scalars['Boolean']>;
  items_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  items_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  items_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<ListFilter>>>;
  AND?: Maybe<Array<Maybe<ListFilter>>>;
};

export type ListLinkingCollections = {
  __typename?: 'ListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pricingPlanCollection?: Maybe<PricingPlanCollection>;
};


export type ListLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ListLinkingCollectionsPricingPlanCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ListLinkingCollectionsPricingPlanCollectionOrder>>>;
};

export enum ListLinkingCollectionsPricingPlanCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ListOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logo) */
export type Logo = Entry & {
  __typename?: 'Logo';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LogoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  action?: Maybe<CallToAction>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logo) */
export type LogoLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logo) */
export type LogoNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logo) */
export type LogoImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logo) */
export type LogoActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};

export type LogoCollection = {
  __typename?: 'LogoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Logo>>;
};

export type LogoFilter = {
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<LogoFilter>>>;
  AND?: Maybe<Array<Maybe<LogoFilter>>>;
};

export type LogoLinkingCollections = {
  __typename?: 'LogoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  customerCollection?: Maybe<CustomerCollection>;
  logosCollectionCollection?: Maybe<LogosCollectionCollection>;
  quote2Collection?: Maybe<Quote2Collection>;
};


export type LogoLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LogoLinkingCollectionsCustomerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogoLinkingCollectionsCustomerCollectionOrder>>>;
};


export type LogoLinkingCollectionsLogosCollectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogoLinkingCollectionsLogosCollectionCollectionOrder>>>;
};


export type LogoLinkingCollectionsQuote2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogoLinkingCollectionsQuote2CollectionOrder>>>;
};

export enum LogoLinkingCollectionsCustomerCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogoLinkingCollectionsLogosCollectionCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogoLinkingCollectionsQuote2CollectionOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogoOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollection = Entry & {
  __typename?: 'LogosCollection';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LogosCollectionLinkingCollections>;
  objectName?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  logosCollection?: Maybe<LogosCollectionLogosCollection>;
  action?: Maybe<CallToAction>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollectionObjectNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollectionTaglineArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollectionLogosCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogoFilter>;
  order?: Maybe<Array<Maybe<LogosCollectionLogosCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/logosCollection) */
export type LogosCollectionActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};

export type LogosCollectionCollection = {
  __typename?: 'LogosCollectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<LogosCollection>>;
};

export type LogosCollectionFilter = {
  logos?: Maybe<CfLogoNestedFilter>;
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  tagline_exists?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_not?: Maybe<Scalars['String']>;
  tagline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_contains?: Maybe<Scalars['String']>;
  tagline_not_contains?: Maybe<Scalars['String']>;
  logosCollection_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<LogosCollectionFilter>>>;
  AND?: Maybe<Array<Maybe<LogosCollectionFilter>>>;
};

export type LogosCollectionLinkingCollections = {
  __typename?: 'LogosCollectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type LogosCollectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LogosCollectionLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogosCollectionLinkingCollectionsHomeCollectionOrder>>>;
};


export type LogosCollectionLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogosCollectionLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type LogosCollectionLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<LogosCollectionLinkingCollectionsSectionCollectionOrder>>>;
};

export enum LogosCollectionLinkingCollectionsHomeCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogosCollectionLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogosCollectionLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LogosCollectionLogosCollection = {
  __typename?: 'LogosCollectionLogosCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Logo>>;
};

export enum LogosCollectionLogosCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LogosCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/markdownBody) */
export type MarkdownBody = Entry & {
  __typename?: 'MarkdownBody';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MarkdownBodyLinkingCollections>;
  blockName?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/markdownBody) */
export type MarkdownBodyLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/markdownBody) */
export type MarkdownBodyBlockNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/markdownBody) */
export type MarkdownBodyBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownBodyCollection = {
  __typename?: 'MarkdownBodyCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<MarkdownBody>>;
};

export type MarkdownBodyFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  blockName_exists?: Maybe<Scalars['Boolean']>;
  blockName?: Maybe<Scalars['String']>;
  blockName_not?: Maybe<Scalars['String']>;
  blockName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blockName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  blockName_contains?: Maybe<Scalars['String']>;
  blockName_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<MarkdownBodyFilter>>>;
  AND?: Maybe<Array<Maybe<MarkdownBodyFilter>>>;
};

export type MarkdownBodyLinkingCollections = {
  __typename?: 'MarkdownBodyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type MarkdownBodyLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type MarkdownBodyLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MarkdownBodyLinkingCollectionsSectionCollectionOrder>>>;
};

export enum MarkdownBodyLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MarkdownBodyOrder {
  BlockNameAsc = 'blockName_ASC',
  BlockNameDesc = 'blockName_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlock = Entry & {
  __typename?: 'MediaBlock';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MediaBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<MediaBlockDescription>;
  action?: Maybe<CallToAction>;
  image?: Maybe<Asset>;
  type?: Maybe<Scalars['String']>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** For linking to other resources: podcasts, documentation, articles, etc... [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/mediaBlock) */
export type MediaBlockTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MediaBlockCollection = {
  __typename?: 'MediaBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<MediaBlock>>;
};

export type MediaBlockDescription = {
  __typename?: 'MediaBlockDescription';
  json: Scalars['JSON'];
  links: MediaBlockDescriptionLinks;
};

export type MediaBlockDescriptionAssets = {
  __typename?: 'MediaBlockDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type MediaBlockDescriptionEntries = {
  __typename?: 'MediaBlockDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type MediaBlockDescriptionLinks = {
  __typename?: 'MediaBlockDescriptionLinks';
  entries: MediaBlockDescriptionEntries;
  assets: MediaBlockDescriptionAssets;
  resources: MediaBlockDescriptionResources;
};

export type MediaBlockDescriptionResources = {
  __typename?: 'MediaBlockDescriptionResources';
  block: Array<ResourceLink>;
};

export type MediaBlockFilter = {
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<MediaBlockFilter>>>;
  AND?: Maybe<Array<Maybe<MediaBlockFilter>>>;
};

export type MediaBlockLinkingCollections = {
  __typename?: 'MediaBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type MediaBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediaBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MediaBlockLinkingCollectionsSectionCollectionOrder>>>;
};

export enum MediaBlockLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type Metadata = Entry & {
  __typename?: 'Metadata';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MetadataLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  url?: Maybe<Scalars['String']>;
};


/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type MetadataLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type MetadataTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type MetadataDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type MetadataImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Metadata for SEO. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/metadata) */
export type MetadataUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Metadata>>;
};

export type MetadataFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<MetadataFilter>>>;
  AND?: Maybe<Array<Maybe<MetadataFilter>>>;
};

export type MetadataLinkingCollections = {
  __typename?: 'MetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  featuresCollection?: Maybe<FeaturesCollection>;
  pageTrustCollection?: Maybe<PageTrustCollection>;
  pagePartnersCollection?: Maybe<PagePartnersCollection>;
  pagePricingCollection?: Maybe<PagePricingCollection>;
  pageSitemapCollection?: Maybe<PageSitemapCollection>;
  learnCollection?: Maybe<LearnCollection>;
  pagePressCollection?: Maybe<PagePressCollection>;
  pageEventsCollection?: Maybe<PageEventsCollection>;
  pageCustomersCollection?: Maybe<PageCustomersCollection>;
  communityCollection?: Maybe<CommunityCollection>;
  pageClientServerlessCollection?: Maybe<PageClientServerlessCollection>;
  pageCareersCollection?: Maybe<PageCareersCollection>;
  blogCollection?: Maybe<BlogCollection>;
  companyCollection?: Maybe<CompanyCollection>;
};


export type MetadataLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type MetadataLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsHomeCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type MetadataLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type MetadataLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsBlogPostCollectionOrder>>>;
};


export type MetadataLinkingCollectionsFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsFeaturesCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageTrustCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageTrustCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPagePartnersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPagePartnersCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPagePricingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPagePricingCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageSitemapCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageSitemapCollectionOrder>>>;
};


export type MetadataLinkingCollectionsLearnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsLearnCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPagePressCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPagePressCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageEventsCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageCustomersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageCustomersCollectionOrder>>>;
};


export type MetadataLinkingCollectionsCommunityCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsCommunityCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageClientServerlessCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageClientServerlessCollectionOrder>>>;
};


export type MetadataLinkingCollectionsPageCareersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsPageCareersCollectionOrder>>>;
};


export type MetadataLinkingCollectionsBlogCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsBlogCollectionOrder>>>;
};


export type MetadataLinkingCollectionsCompanyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<MetadataLinkingCollectionsCompanyCollectionOrder>>>;
};

export enum MetadataLinkingCollectionsBlogCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsBlogPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsCommunityCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsCompanyCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsFeaturesCollectionOrder {
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SubIdAsc = 'subId_ASC',
  SubIdDesc = 'subId_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsHomeCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsLearnCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageCareersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageClientServerlessCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageCustomersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageEventsCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPagePartnersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPagePressCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPagePricingCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  VariantWeightAsc = 'variantWeight_ASC',
  VariantWeightDesc = 'variantWeight_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  ComingSoonTextAsc = 'comingSoonText_ASC',
  ComingSoonTextDesc = 'comingSoonText_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageSitemapCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageTrustCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MetadataOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A dropdown containing links, for the header navigation menu. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/navLink) */
export type NavLink = Entry & {
  __typename?: 'NavLink';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavLinkLinkingCollections>;
  children?: Maybe<Scalars['String']>;
  dropdownLinksCollection?: Maybe<NavLinkDropdownLinksCollection>;
};


/** A dropdown containing links, for the header navigation menu. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/navLink) */
export type NavLinkLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A dropdown containing links, for the header navigation menu. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/navLink) */
export type NavLinkChildrenArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A dropdown containing links, for the header navigation menu. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/navLink) */
export type NavLinkDropdownLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<NavLinkDropdownLinksCollectionOrder>>>;
};

export type NavLinkCollection = {
  __typename?: 'NavLinkCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
};

export type NavLinkDropdownLinksCollection = {
  __typename?: 'NavLinkDropdownLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum NavLinkDropdownLinksCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavLinkFilter = {
  dropdownLinks?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  dropdownLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<NavLinkFilter>>>;
  AND?: Maybe<Array<Maybe<NavLinkFilter>>>;
};

export type NavLinkLinkingCollections = {
  __typename?: 'NavLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  pageTrustCollection?: Maybe<PageTrustCollection>;
};


export type NavLinkLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type NavLinkLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<NavLinkLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type NavLinkLinkingCollectionsPageTrustCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<NavLinkLinkingCollectionsPageTrustCollectionOrder>>>;
};

export enum NavLinkLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavLinkLinkingCollectionsPageTrustCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavLinkOrder {
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareers = Entry & {
  __typename?: 'PageCareers';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageCareersLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PageCareersHeroSubtitle>;
  heroActionsCollection?: Maybe<PageCareersHeroActionsCollection>;
  sectionsCollection?: Maybe<PageCareersSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PageCareersHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageCareersSectionsCollectionOrder>>>;
};


/** https://fauna.com/careers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCareers) */
export type PageCareersHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageCareersCollection = {
  __typename?: 'PageCareersCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageCareers>>;
};

export type PageCareersFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageCareersFilter>>>;
  AND?: Maybe<Array<Maybe<PageCareersFilter>>>;
};

export type PageCareersHeroActionsCollection = {
  __typename?: 'PageCareersHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PageCareersHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageCareersHeroSubtitle = {
  __typename?: 'PageCareersHeroSubtitle';
  json: Scalars['JSON'];
  links: PageCareersHeroSubtitleLinks;
};

export type PageCareersHeroSubtitleAssets = {
  __typename?: 'PageCareersHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageCareersHeroSubtitleEntries = {
  __typename?: 'PageCareersHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PageCareersHeroSubtitleLinks = {
  __typename?: 'PageCareersHeroSubtitleLinks';
  entries: PageCareersHeroSubtitleEntries;
  assets: PageCareersHeroSubtitleAssets;
  resources: PageCareersHeroSubtitleResources;
};

export type PageCareersHeroSubtitleResources = {
  __typename?: 'PageCareersHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PageCareersLinkingCollections = {
  __typename?: 'PageCareersLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageCareersLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageCareersOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageCareersSectionsCollection = {
  __typename?: 'PageCareersSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageCareersSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerless = Entry & {
  __typename?: 'PageClientServerless';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageClientServerlessLinkingCollections>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  sectionsCollection?: Maybe<PageClientServerlessSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageClientServerlessSectionsCollectionOrder>>>;
};


/** https://fauna.com/client-serverless [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageClientServerless) */
export type PageClientServerlessHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageClientServerlessCollection = {
  __typename?: 'PageClientServerlessCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageClientServerless>>;
};

export type PageClientServerlessFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageClientServerlessFilter>>>;
  AND?: Maybe<Array<Maybe<PageClientServerlessFilter>>>;
};

export type PageClientServerlessLinkingCollections = {
  __typename?: 'PageClientServerlessLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageClientServerlessLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageClientServerlessOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageClientServerlessSectionsCollection = {
  __typename?: 'PageClientServerlessSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageClientServerlessSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomers = Entry & {
  __typename?: 'PageCustomers';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageCustomersLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PageCustomersHeroSubtitle>;
  heroActionsCollection?: Maybe<PageCustomersHeroActionsCollection>;
  sectionsCollection?: Maybe<PageCustomersSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PageCustomersHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageCustomersSectionsCollectionOrder>>>;
};


/** https://fauna.com/customers [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageCustomers) */
export type PageCustomersHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageCustomersCollection = {
  __typename?: 'PageCustomersCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageCustomers>>;
};

export type PageCustomersFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageCustomersFilter>>>;
  AND?: Maybe<Array<Maybe<PageCustomersFilter>>>;
};

export type PageCustomersHeroActionsCollection = {
  __typename?: 'PageCustomersHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PageCustomersHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageCustomersHeroSubtitle = {
  __typename?: 'PageCustomersHeroSubtitle';
  json: Scalars['JSON'];
  links: PageCustomersHeroSubtitleLinks;
};

export type PageCustomersHeroSubtitleAssets = {
  __typename?: 'PageCustomersHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageCustomersHeroSubtitleEntries = {
  __typename?: 'PageCustomersHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PageCustomersHeroSubtitleLinks = {
  __typename?: 'PageCustomersHeroSubtitleLinks';
  entries: PageCustomersHeroSubtitleEntries;
  assets: PageCustomersHeroSubtitleAssets;
  resources: PageCustomersHeroSubtitleResources;
};

export type PageCustomersHeroSubtitleResources = {
  __typename?: 'PageCustomersHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PageCustomersLinkingCollections = {
  __typename?: 'PageCustomersLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageCustomersLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageCustomersOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageCustomersSectionsCollection = {
  __typename?: 'PageCustomersSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageCustomersSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEvents = Entry & {
  __typename?: 'PageEvents';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageEventsLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PageEventsHeroSubtitle>;
  heroActionsCollection?: Maybe<PageEventsHeroActionsCollection>;
  sectionsCollection?: Maybe<PageEventsSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PageEventsHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageEventsSectionsCollectionOrder>>>;
};


/** https://fauna.com/events [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageEvents) */
export type PageEventsHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageEventsCollection = {
  __typename?: 'PageEventsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageEvents>>;
};

export type PageEventsFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageEventsFilter>>>;
  AND?: Maybe<Array<Maybe<PageEventsFilter>>>;
};

export type PageEventsHeroActionsCollection = {
  __typename?: 'PageEventsHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PageEventsHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageEventsHeroSubtitle = {
  __typename?: 'PageEventsHeroSubtitle';
  json: Scalars['JSON'];
  links: PageEventsHeroSubtitleLinks;
};

export type PageEventsHeroSubtitleAssets = {
  __typename?: 'PageEventsHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageEventsHeroSubtitleEntries = {
  __typename?: 'PageEventsHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PageEventsHeroSubtitleLinks = {
  __typename?: 'PageEventsHeroSubtitleLinks';
  entries: PageEventsHeroSubtitleEntries;
  assets: PageEventsHeroSubtitleAssets;
  resources: PageEventsHeroSubtitleResources;
};

export type PageEventsHeroSubtitleResources = {
  __typename?: 'PageEventsHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PageEventsLinkingCollections = {
  __typename?: 'PageEventsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageEventsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageEventsOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageEventsSectionsCollection = {
  __typename?: 'PageEventsSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageEventsSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartners = Entry & {
  __typename?: 'PagePartners';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PagePartnersLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PagePartnersHeroSubtitle>;
  sectionsCollection?: Maybe<PagePartnersSectionsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePartners) */
export type PagePartnersSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PagePartnersSectionsCollectionOrder>>>;
};

export type PagePartnersCollection = {
  __typename?: 'PagePartnersCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PagePartners>>;
};

export type PagePartnersFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PagePartnersFilter>>>;
  AND?: Maybe<Array<Maybe<PagePartnersFilter>>>;
};

export type PagePartnersHeroSubtitle = {
  __typename?: 'PagePartnersHeroSubtitle';
  json: Scalars['JSON'];
  links: PagePartnersHeroSubtitleLinks;
};

export type PagePartnersHeroSubtitleAssets = {
  __typename?: 'PagePartnersHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PagePartnersHeroSubtitleEntries = {
  __typename?: 'PagePartnersHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PagePartnersHeroSubtitleLinks = {
  __typename?: 'PagePartnersHeroSubtitleLinks';
  entries: PagePartnersHeroSubtitleEntries;
  assets: PagePartnersHeroSubtitleAssets;
  resources: PagePartnersHeroSubtitleResources;
};

export type PagePartnersHeroSubtitleResources = {
  __typename?: 'PagePartnersHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PagePartnersLinkingCollections = {
  __typename?: 'PagePartnersLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PagePartnersLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PagePartnersOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePartnersSectionsCollection = {
  __typename?: 'PagePartnersSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PagePartnersSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePress = Entry & {
  __typename?: 'PagePress';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PagePressLinkingCollections>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
  featuredPost?: Maybe<PressPost>;
  pressKitBlock?: Maybe<SectionBlock>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressFeaturedPostArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PressPostFilter>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressPressKitBlockArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
};


/** https://fauna.com/press [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePress) */
export type PagePressHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PagePressCollection = {
  __typename?: 'PagePressCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PagePress>>;
};

export type PagePressFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  featuredPost?: Maybe<CfPressPostNestedFilter>;
  pressKitBlock?: Maybe<CfSectionBlockNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  featuredPost_exists?: Maybe<Scalars['Boolean']>;
  pressKitBlock_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PagePressFilter>>>;
  AND?: Maybe<Array<Maybe<PagePressFilter>>>;
};

export type PagePressLinkingCollections = {
  __typename?: 'PagePressLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PagePressLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PagePressOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricing = Entry & {
  __typename?: 'PagePricing';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PagePricingLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  variantWeight?: Maybe<Scalars['Float']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PagePricingHeroSubtitle>;
  heroBlocksCollection?: Maybe<PagePricingHeroBlocksCollection>;
  heroActionsCollection?: Maybe<PagePricingHeroActionsCollection>;
  sectionsCollection?: Maybe<PagePricingSectionsCollection>;
  comingSoonText?: Maybe<Scalars['String']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingVariantWeightArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingHeroBlocksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
  order?: Maybe<Array<Maybe<PagePricingHeroBlocksCollectionOrder>>>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PagePricingHeroActionsCollectionOrder>>>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PagePricingSectionsCollectionOrder>>>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingComingSoonTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/pricing [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pagePricing) */
export type PagePricingNoIndexArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PagePricingCollection = {
  __typename?: 'PagePricingCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PagePricing>>;
};

export type PagePricingFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroBlocks?: Maybe<CfSectionBlockNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  variantWeight_exists?: Maybe<Scalars['Boolean']>;
  variantWeight?: Maybe<Scalars['Float']>;
  variantWeight_not?: Maybe<Scalars['Float']>;
  variantWeight_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  variantWeight_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  variantWeight_gt?: Maybe<Scalars['Float']>;
  variantWeight_gte?: Maybe<Scalars['Float']>;
  variantWeight_lt?: Maybe<Scalars['Float']>;
  variantWeight_lte?: Maybe<Scalars['Float']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroBlocksCollection_exists?: Maybe<Scalars['Boolean']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  comingSoonText_exists?: Maybe<Scalars['Boolean']>;
  comingSoonText?: Maybe<Scalars['String']>;
  comingSoonText_not?: Maybe<Scalars['String']>;
  comingSoonText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  comingSoonText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  comingSoonText_contains?: Maybe<Scalars['String']>;
  comingSoonText_not_contains?: Maybe<Scalars['String']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  noIndex_exists?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  noIndex_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PagePricingFilter>>>;
  AND?: Maybe<Array<Maybe<PagePricingFilter>>>;
};

export type PagePricingHeroActionsCollection = {
  __typename?: 'PagePricingHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PagePricingHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePricingHeroBlocksCollection = {
  __typename?: 'PagePricingHeroBlocksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SectionBlock>>;
};

export enum PagePricingHeroBlocksCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePricingHeroSubtitle = {
  __typename?: 'PagePricingHeroSubtitle';
  json: Scalars['JSON'];
  links: PagePricingHeroSubtitleLinks;
};

export type PagePricingHeroSubtitleAssets = {
  __typename?: 'PagePricingHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PagePricingHeroSubtitleEntries = {
  __typename?: 'PagePricingHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PagePricingHeroSubtitleLinks = {
  __typename?: 'PagePricingHeroSubtitleLinks';
  entries: PagePricingHeroSubtitleEntries;
  assets: PagePricingHeroSubtitleAssets;
  resources: PagePricingHeroSubtitleResources;
};

export type PagePricingHeroSubtitleResources = {
  __typename?: 'PagePricingHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PagePricingLinkingCollections = {
  __typename?: 'PagePricingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PagePricingLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PagePricingOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  VariantWeightAsc = 'variantWeight_ASC',
  VariantWeightDesc = 'variantWeight_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  ComingSoonTextAsc = 'comingSoonText_ASC',
  ComingSoonTextDesc = 'comingSoonText_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePricingSectionsCollection = {
  __typename?: 'PagePricingSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PagePricingSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemap = Entry & {
  __typename?: 'PageSitemap';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageSitemapLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PageSitemapHeroSubtitle>;
};


/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemapLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemapMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemapPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemapHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://fauna.com/sitemap [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageSitemap) */
export type PageSitemapHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageSitemapCollection = {
  __typename?: 'PageSitemapCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageSitemap>>;
};

export type PageSitemapFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<PageSitemapFilter>>>;
  AND?: Maybe<Array<Maybe<PageSitemapFilter>>>;
};

export type PageSitemapHeroSubtitle = {
  __typename?: 'PageSitemapHeroSubtitle';
  json: Scalars['JSON'];
  links: PageSitemapHeroSubtitleLinks;
};

export type PageSitemapHeroSubtitleAssets = {
  __typename?: 'PageSitemapHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageSitemapHeroSubtitleEntries = {
  __typename?: 'PageSitemapHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PageSitemapHeroSubtitleLinks = {
  __typename?: 'PageSitemapHeroSubtitleLinks';
  entries: PageSitemapHeroSubtitleEntries;
  assets: PageSitemapHeroSubtitleAssets;
  resources: PageSitemapHeroSubtitleResources;
};

export type PageSitemapHeroSubtitleResources = {
  __typename?: 'PageSitemapHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PageSitemapLinkingCollections = {
  __typename?: 'PageSitemapLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageSitemapLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageSitemapOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplate = Entry & {
  __typename?: 'PageTemplate';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageTemplateLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroSubtitle?: Maybe<PageTemplateHeroSubtitle>;
  heroActionsCollection?: Maybe<PageTemplateHeroActionsCollection>;
  heroSlider?: Maybe<LogosCollection>;
  linesInHero?: Maybe<Scalars['Boolean']>;
  sectionsCollection?: Maybe<PageTemplateSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<Asset>;
  heroImageStacked?: Maybe<Scalars['Boolean']>;
  heroSignUpForm?: Maybe<Scalars['Boolean']>;
  eventsCollection?: Maybe<PageTemplateEventsCollection>;
  darkBackground?: Maybe<Scalars['Boolean']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplatePageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PageTemplateHeroActionsCollectionOrder>>>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroSliderArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogosCollectionFilter>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateLinesInHeroArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageTemplateSectionsCollectionOrder>>>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateNoIndexArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroImageStackedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateHeroSignUpFormArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EventFilter>;
  order?: Maybe<Array<Maybe<PageTemplateEventsCollectionOrder>>>;
};


/** Template for standard looking pages. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTemplate) */
export type PageTemplateDarkBackgroundArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageTemplateCollection = {
  __typename?: 'PageTemplateCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageTemplate>>;
};

export type PageTemplateEventsCollection = {
  __typename?: 'PageTemplateEventsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Event>>;
};

export enum PageTemplateEventsCollectionOrder {
  EventTitleAsc = 'eventTitle_ASC',
  EventTitleDesc = 'eventTitle_DESC',
  EventStartDateAsc = 'eventStartDate_ASC',
  EventStartDateDesc = 'eventStartDate_DESC',
  EventEndDateAsc = 'eventEndDate_ASC',
  EventEndDateDesc = 'eventEndDate_DESC',
  EventUrlAsc = 'eventUrl_ASC',
  EventUrlDesc = 'eventUrl_DESC',
  EventLocationAsc = 'eventLocation_ASC',
  EventLocationDesc = 'eventLocation_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTemplateFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  heroActions?: Maybe<CfCallToActionNestedFilter>;
  heroSlider?: Maybe<CfLogosCollectionNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  events?: Maybe<CfEventNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  heroSubtitle_exists?: Maybe<Scalars['Boolean']>;
  heroSubtitle_contains?: Maybe<Scalars['String']>;
  heroSubtitle_not_contains?: Maybe<Scalars['String']>;
  heroActionsCollection_exists?: Maybe<Scalars['Boolean']>;
  heroSlider_exists?: Maybe<Scalars['Boolean']>;
  linesInHero_exists?: Maybe<Scalars['Boolean']>;
  linesInHero?: Maybe<Scalars['Boolean']>;
  linesInHero_not?: Maybe<Scalars['Boolean']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  noIndex_exists?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  noIndex_not?: Maybe<Scalars['Boolean']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  heroImageStacked_exists?: Maybe<Scalars['Boolean']>;
  heroImageStacked?: Maybe<Scalars['Boolean']>;
  heroImageStacked_not?: Maybe<Scalars['Boolean']>;
  heroSignUpForm_exists?: Maybe<Scalars['Boolean']>;
  heroSignUpForm?: Maybe<Scalars['Boolean']>;
  heroSignUpForm_not?: Maybe<Scalars['Boolean']>;
  eventsCollection_exists?: Maybe<Scalars['Boolean']>;
  darkBackground_exists?: Maybe<Scalars['Boolean']>;
  darkBackground?: Maybe<Scalars['Boolean']>;
  darkBackground_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageTemplateFilter>>>;
  AND?: Maybe<Array<Maybe<PageTemplateFilter>>>;
};

export type PageTemplateHeroActionsCollection = {
  __typename?: 'PageTemplateHeroActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PageTemplateHeroActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTemplateHeroSubtitle = {
  __typename?: 'PageTemplateHeroSubtitle';
  json: Scalars['JSON'];
  links: PageTemplateHeroSubtitleLinks;
};

export type PageTemplateHeroSubtitleAssets = {
  __typename?: 'PageTemplateHeroSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PageTemplateHeroSubtitleEntries = {
  __typename?: 'PageTemplateHeroSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PageTemplateHeroSubtitleLinks = {
  __typename?: 'PageTemplateHeroSubtitleLinks';
  entries: PageTemplateHeroSubtitleEntries;
  assets: PageTemplateHeroSubtitleAssets;
  resources: PageTemplateHeroSubtitleResources;
};

export type PageTemplateHeroSubtitleResources = {
  __typename?: 'PageTemplateHeroSubtitleResources';
  block: Array<ResourceLink>;
};

export type PageTemplateLinkingCollections = {
  __typename?: 'PageTemplateLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageTemplateLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageTemplateOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTemplateSectionsCollection = {
  __typename?: 'PageTemplateSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageTemplateSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrust = Entry & {
  __typename?: 'PageTrust';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageTrustLinkingCollections>;
  metadata?: Maybe<Metadata>;
  pageName?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  sectionsCollection?: Maybe<PageTrustSectionsCollection>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  navLogoLink?: Maybe<CallToAction>;
  navLinksCollection?: Maybe<PageTrustNavLinksCollection>;
  footerLinksCollection?: Maybe<PageTrustFooterLinksCollection>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustMetadataArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustPageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustHeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustSectionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<PageTrustSectionsCollectionOrder>>>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustHideFromSitemapArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustNavLogoLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustNavLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<PageTrustNavLinksCollectionOrder>>>;
};


/** https://trust.fauna.com [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pageTrust) */
export type PageTrustFooterLinksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavLinkFilter>;
  order?: Maybe<Array<Maybe<PageTrustFooterLinksCollectionOrder>>>;
};

export type PageTrustCollection = {
  __typename?: 'PageTrustCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageTrust>>;
};

export type PageTrustFilter = {
  metadata?: Maybe<CfMetadataNestedFilter>;
  sections?: Maybe<CfSectionNestedFilter>;
  navLogoLink?: Maybe<CfCallToActionNestedFilter>;
  navLinks?: Maybe<CfCallToActionNestedFilter>;
  footerLinks?: Maybe<CfNavLinkNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  pageName_exists?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  pageName_not?: Maybe<Scalars['String']>;
  pageName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageName_contains?: Maybe<Scalars['String']>;
  pageName_not_contains?: Maybe<Scalars['String']>;
  heroTitle_exists?: Maybe<Scalars['Boolean']>;
  heroTitle?: Maybe<Scalars['String']>;
  heroTitle_not?: Maybe<Scalars['String']>;
  heroTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroTitle_contains?: Maybe<Scalars['String']>;
  heroTitle_not_contains?: Maybe<Scalars['String']>;
  sectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_exists?: Maybe<Scalars['Boolean']>;
  hideFromSitemap?: Maybe<Scalars['Boolean']>;
  hideFromSitemap_not?: Maybe<Scalars['Boolean']>;
  navLogoLink_exists?: Maybe<Scalars['Boolean']>;
  navLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  footerLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageTrustFilter>>>;
  AND?: Maybe<Array<Maybe<PageTrustFilter>>>;
};

export type PageTrustFooterLinksCollection = {
  __typename?: 'PageTrustFooterLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
};

export enum PageTrustFooterLinksCollectionOrder {
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTrustLinkingCollections = {
  __typename?: 'PageTrustLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageTrustLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageTrustNavLinksCollection = {
  __typename?: 'PageTrustNavLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum PageTrustNavLinksCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageTrustOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageTrustSectionsCollection = {
  __typename?: 'PageTrustSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export enum PageTrustSectionsCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCard = Entry & {
  __typename?: 'PartnersCard';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PartnersCardLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<PartnersCardDescription>;
  action?: Maybe<CallToAction>;
  image?: Maybe<Asset>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCardLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCardTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCardDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCardActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/partnersCard) */
export type PartnersCardImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PartnersCardCollection = {
  __typename?: 'PartnersCardCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PartnersCard>>;
};

export type PartnersCardDescription = {
  __typename?: 'PartnersCardDescription';
  json: Scalars['JSON'];
  links: PartnersCardDescriptionLinks;
};

export type PartnersCardDescriptionAssets = {
  __typename?: 'PartnersCardDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PartnersCardDescriptionEntries = {
  __typename?: 'PartnersCardDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PartnersCardDescriptionLinks = {
  __typename?: 'PartnersCardDescriptionLinks';
  entries: PartnersCardDescriptionEntries;
  assets: PartnersCardDescriptionAssets;
  resources: PartnersCardDescriptionResources;
};

export type PartnersCardDescriptionResources = {
  __typename?: 'PartnersCardDescriptionResources';
  block: Array<ResourceLink>;
};

export type PartnersCardFilter = {
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PartnersCardFilter>>>;
  AND?: Maybe<Array<Maybe<PartnersCardFilter>>>;
};

export type PartnersCardLinkingCollections = {
  __typename?: 'PartnersCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type PartnersCardLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PartnersCardLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PartnersCardLinkingCollectionsSectionCollectionOrder>>>;
};

export enum PartnersCardLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PartnersCardOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Asset>;
  socialMedia?: Maybe<SocialMedia>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonPositionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonBioArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonAvatarArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/person) */
export type PersonSocialMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SocialMediaFilter>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Person>>;
};

export type PersonFilter = {
  socialMedia?: Maybe<CfSocialMediaNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  position_exists?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['String']>;
  position_not?: Maybe<Scalars['String']>;
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_contains?: Maybe<Scalars['String']>;
  position_not_contains?: Maybe<Scalars['String']>;
  bio_exists?: Maybe<Scalars['Boolean']>;
  bio?: Maybe<Scalars['String']>;
  bio_not?: Maybe<Scalars['String']>;
  bio_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bio_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bio_contains?: Maybe<Scalars['String']>;
  bio_not_contains?: Maybe<Scalars['String']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  socialMedia_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PersonFilter>>>;
  AND?: Maybe<Array<Maybe<PersonFilter>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  quote2Collection?: Maybe<Quote2Collection>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PersonLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PersonLinkingCollectionsSectionCollectionOrder>>>;
};


export type PersonLinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PersonLinkingCollectionsSectionBlockCollectionOrder>>>;
};


export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PersonLinkingCollectionsBlogPostCollectionOrder>>>;
};


export type PersonLinkingCollectionsQuote2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PersonLinkingCollectionsQuote2CollectionOrder>>>;
};

export enum PersonLinkingCollectionsBlogPostCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IsCommunityPostAsc = 'isCommunityPost_ASC',
  IsCommunityPostDesc = 'isCommunityPost_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  LastUpdatedAsc = 'lastUpdated_ASC',
  LastUpdatedDesc = 'lastUpdated_DESC',
  HideFromRelatedPostsAsc = 'hideFromRelatedPosts_ASC',
  HideFromRelatedPostsDesc = 'hideFromRelatedPosts_DESC',
  CanonicalLinkAsc = 'canonicalLink_ASC',
  CanonicalLinkDesc = 'canonicalLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PersonLinkingCollectionsQuote2CollectionOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PersonLinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PersonLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPost = Entry & {
  __typename?: 'PressPost';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PressPostLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  publicationName?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Asset>;
  action?: Maybe<CallToAction>;
  excerpt?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostPublicationNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostCoverImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pressPost) */
export type PressPostExcerptArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PressPostCollection = {
  __typename?: 'PressPostCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PressPost>>;
};

export type PressPostFilter = {
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  publicationName_exists?: Maybe<Scalars['Boolean']>;
  publicationName?: Maybe<Scalars['String']>;
  publicationName_not?: Maybe<Scalars['String']>;
  publicationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationName_contains?: Maybe<Scalars['String']>;
  publicationName_not_contains?: Maybe<Scalars['String']>;
  coverImage_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  excerpt_exists?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  excerpt_not?: Maybe<Scalars['String']>;
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_contains?: Maybe<Scalars['String']>;
  excerpt_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<PressPostFilter>>>;
  AND?: Maybe<Array<Maybe<PressPostFilter>>>;
};

export type PressPostLinkingCollections = {
  __typename?: 'PressPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pagePressCollection?: Maybe<PagePressCollection>;
};


export type PressPostLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PressPostLinkingCollectionsPagePressCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PressPostLinkingCollectionsPagePressCollectionOrder>>>;
};

export enum PressPostLinkingCollectionsPagePressCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PressPostOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  PublicationNameAsc = 'publicationName_ASC',
  PublicationNameDesc = 'publicationName_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlan = Entry & {
  __typename?: 'PricingPlan';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PricingPlanLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<PricingPlanDescription>;
  priceLabel?: Maybe<Scalars['String']>;
  creditsPerMonth?: Maybe<Scalars['Int']>;
  listItemsCollection?: Maybe<PricingPlanListItemsCollection>;
  action?: Maybe<CallToAction>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  usageRate?: Maybe<UsageRate>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanPriceLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanCreditsPerMonthArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanListItemsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ListFilter>;
  order?: Maybe<Array<Maybe<PricingPlanListItemsCollectionOrder>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanIsFeaturedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlan) */
export type PricingPlanUsageRateArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<UsageRateFilter>;
};

export type PricingPlanCollection = {
  __typename?: 'PricingPlanCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PricingPlan>>;
};

export type PricingPlanDescription = {
  __typename?: 'PricingPlanDescription';
  json: Scalars['JSON'];
  links: PricingPlanDescriptionLinks;
};

export type PricingPlanDescriptionAssets = {
  __typename?: 'PricingPlanDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type PricingPlanDescriptionEntries = {
  __typename?: 'PricingPlanDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type PricingPlanDescriptionLinks = {
  __typename?: 'PricingPlanDescriptionLinks';
  entries: PricingPlanDescriptionEntries;
  assets: PricingPlanDescriptionAssets;
  resources: PricingPlanDescriptionResources;
};

export type PricingPlanDescriptionResources = {
  __typename?: 'PricingPlanDescriptionResources';
  block: Array<ResourceLink>;
};

export type PricingPlanFilter = {
  listItems?: Maybe<CfListNestedFilter>;
  action?: Maybe<CfCallToActionNestedFilter>;
  usageRate?: Maybe<CfUsageRateNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  priceLabel_exists?: Maybe<Scalars['Boolean']>;
  priceLabel?: Maybe<Scalars['String']>;
  priceLabel_not?: Maybe<Scalars['String']>;
  priceLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceLabel_contains?: Maybe<Scalars['String']>;
  priceLabel_not_contains?: Maybe<Scalars['String']>;
  creditsPerMonth_exists?: Maybe<Scalars['Boolean']>;
  creditsPerMonth?: Maybe<Scalars['Int']>;
  creditsPerMonth_not?: Maybe<Scalars['Int']>;
  creditsPerMonth_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creditsPerMonth_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creditsPerMonth_gt?: Maybe<Scalars['Int']>;
  creditsPerMonth_gte?: Maybe<Scalars['Int']>;
  creditsPerMonth_lt?: Maybe<Scalars['Int']>;
  creditsPerMonth_lte?: Maybe<Scalars['Int']>;
  listItemsCollection_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  isFeatured_exists?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isFeatured_not?: Maybe<Scalars['Boolean']>;
  usageRate_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PricingPlanFilter>>>;
  AND?: Maybe<Array<Maybe<PricingPlanFilter>>>;
};

export type PricingPlanLinkingCollections = {
  __typename?: 'PricingPlanLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type PricingPlanLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PricingPlanLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PricingPlanLinkingCollectionsSectionCollectionOrder>>>;
};

export enum PricingPlanLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PricingPlanListItemsCollection = {
  __typename?: 'PricingPlanListItemsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<List>>;
};

export enum PricingPlanListItemsCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PricingPlanOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2 = Entry & {
  __typename?: 'PricingPlanV2';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PricingPlanV2LinkingCollections>;
  name?: Maybe<Scalars['String']>;
  planDescription?: Maybe<Scalars['String']>;
  priceLabel?: Maybe<Scalars['String']>;
  annualPriceLabel?: Maybe<Scalars['String']>;
  creditsPerMonth?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  annualBody?: Maybe<Scalars['String']>;
  action?: Maybe<CallToAction>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  usageRate?: Maybe<UsageRate>;
  usageRatesCollection?: Maybe<PricingPlanV2UsageRatesCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2LinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2NameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2PlanDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2PriceLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2AnnualPriceLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2CreditsPerMonthArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2BodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2AnnualBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2ActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2IsFeaturedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2UsageRateArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<UsageRateFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/pricingPlanV2) */
export type PricingPlanV2UsageRatesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<UsageRateFilter>;
  order?: Maybe<Array<Maybe<PricingPlanV2UsageRatesCollectionOrder>>>;
};

export type PricingPlanV2Collection = {
  __typename?: 'PricingPlanV2Collection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PricingPlanV2>>;
};

export type PricingPlanV2Filter = {
  action?: Maybe<CfCallToActionNestedFilter>;
  usageRate?: Maybe<CfUsageRateNestedFilter>;
  usageRates?: Maybe<CfUsageRateNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  planDescription_exists?: Maybe<Scalars['Boolean']>;
  planDescription?: Maybe<Scalars['String']>;
  planDescription_not?: Maybe<Scalars['String']>;
  planDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  planDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  planDescription_contains?: Maybe<Scalars['String']>;
  planDescription_not_contains?: Maybe<Scalars['String']>;
  priceLabel_exists?: Maybe<Scalars['Boolean']>;
  priceLabel?: Maybe<Scalars['String']>;
  priceLabel_not?: Maybe<Scalars['String']>;
  priceLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  priceLabel_contains?: Maybe<Scalars['String']>;
  priceLabel_not_contains?: Maybe<Scalars['String']>;
  annualPriceLabel_exists?: Maybe<Scalars['Boolean']>;
  annualPriceLabel?: Maybe<Scalars['String']>;
  annualPriceLabel_not?: Maybe<Scalars['String']>;
  annualPriceLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  annualPriceLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  annualPriceLabel_contains?: Maybe<Scalars['String']>;
  annualPriceLabel_not_contains?: Maybe<Scalars['String']>;
  creditsPerMonth_exists?: Maybe<Scalars['Boolean']>;
  creditsPerMonth?: Maybe<Scalars['Int']>;
  creditsPerMonth_not?: Maybe<Scalars['Int']>;
  creditsPerMonth_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creditsPerMonth_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  creditsPerMonth_gt?: Maybe<Scalars['Int']>;
  creditsPerMonth_gte?: Maybe<Scalars['Int']>;
  creditsPerMonth_lt?: Maybe<Scalars['Int']>;
  creditsPerMonth_lte?: Maybe<Scalars['Int']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  annualBody_exists?: Maybe<Scalars['Boolean']>;
  annualBody?: Maybe<Scalars['String']>;
  annualBody_not?: Maybe<Scalars['String']>;
  annualBody_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  annualBody_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  annualBody_contains?: Maybe<Scalars['String']>;
  annualBody_not_contains?: Maybe<Scalars['String']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  isFeatured_exists?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isFeatured_not?: Maybe<Scalars['Boolean']>;
  usageRate_exists?: Maybe<Scalars['Boolean']>;
  usageRatesCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PricingPlanV2Filter>>>;
  AND?: Maybe<Array<Maybe<PricingPlanV2Filter>>>;
};

export type PricingPlanV2LinkingCollections = {
  __typename?: 'PricingPlanV2LinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type PricingPlanV2LinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PricingPlanV2LinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<PricingPlanV2LinkingCollectionsSectionCollectionOrder>>>;
};

export enum PricingPlanV2LinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PricingPlanV2Order {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  AnnualPriceLabelAsc = 'annualPriceLabel_ASC',
  AnnualPriceLabelDesc = 'annualPriceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PricingPlanV2UsageRatesCollection = {
  __typename?: 'PricingPlanV2UsageRatesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<UsageRate>>;
};

export enum PricingPlanV2UsageRatesCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  ReadOperationsMillionAsc = 'readOperationsMillion_ASC',
  ReadOperationsMillionDesc = 'readOperationsMillion_DESC',
  WriteOperationsMillionAsc = 'writeOperationsMillion_ASC',
  WriteOperationsMillionDesc = 'writeOperationsMillion_DESC',
  TransactionalComputeOperationsMillionAsc = 'transactionalComputeOperationsMillion_ASC',
  TransactionalComputeOperationsMillionDesc = 'transactionalComputeOperationsMillion_DESC',
  StorageGbAsc = 'storageGb_ASC',
  StorageGbDesc = 'storageGb_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplate?: Maybe<PageTemplate>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  metadata?: Maybe<Metadata>;
  metadataCollection?: Maybe<MetadataCollection>;
  sectionBlock?: Maybe<SectionBlock>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
  form?: Maybe<Form>;
  formCollection?: Maybe<FormCollection>;
  generalData?: Maybe<GeneralData>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  features?: Maybe<Features>;
  featuresCollection?: Maybe<FeaturesCollection>;
  callToAction?: Maybe<CallToAction>;
  callToActionCollection?: Maybe<CallToActionCollection>;
  tweet?: Maybe<Tweet>;
  tweetCollection?: Maybe<TweetCollection>;
  customer?: Maybe<Customer>;
  customerCollection?: Maybe<CustomerCollection>;
  pageTrust?: Maybe<PageTrust>;
  pageTrustCollection?: Maybe<PageTrustCollection>;
  partnersCard?: Maybe<PartnersCard>;
  partnersCardCollection?: Maybe<PartnersCardCollection>;
  pagePartners?: Maybe<PagePartners>;
  pagePartnersCollection?: Maybe<PagePartnersCollection>;
  pricingPlanV2?: Maybe<PricingPlanV2>;
  pricingPlanV2Collection?: Maybe<PricingPlanV2Collection>;
  usageRate?: Maybe<UsageRate>;
  usageRateCollection?: Maybe<UsageRateCollection>;
  pagePricing?: Maybe<PagePricing>;
  pagePricingCollection?: Maybe<PagePricingCollection>;
  descriptionMarkdown?: Maybe<DescriptionMarkdown>;
  descriptionMarkdownCollection?: Maybe<DescriptionMarkdownCollection>;
  description?: Maybe<Description>;
  descriptionCollection?: Maybe<DescriptionCollection>;
  column?: Maybe<Column>;
  columnCollection?: Maybe<ColumnCollection>;
  pageSitemap?: Maybe<PageSitemap>;
  pageSitemapCollection?: Maybe<PageSitemapCollection>;
  learn?: Maybe<Learn>;
  learnCollection?: Maybe<LearnCollection>;
  pagePress?: Maybe<PagePress>;
  pagePressCollection?: Maybe<PagePressCollection>;
  pageEvents?: Maybe<PageEvents>;
  pageEventsCollection?: Maybe<PageEventsCollection>;
  pageCustomers?: Maybe<PageCustomers>;
  pageCustomersCollection?: Maybe<PageCustomersCollection>;
  community?: Maybe<Community>;
  communityCollection?: Maybe<CommunityCollection>;
  pageClientServerless?: Maybe<PageClientServerless>;
  pageClientServerlessCollection?: Maybe<PageClientServerlessCollection>;
  pageCareers?: Maybe<PageCareers>;
  pageCareersCollection?: Maybe<PageCareersCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  company?: Maybe<Company>;
  companyCollection?: Maybe<CompanyCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  logosCollection?: Maybe<LogosCollection>;
  logosCollectionCollection?: Maybe<LogosCollectionCollection>;
  pricingPlan?: Maybe<PricingPlan>;
  pricingPlanCollection?: Maybe<PricingPlanCollection>;
  redirects?: Maybe<Redirects>;
  redirectsCollection?: Maybe<RedirectsCollection>;
  redirect?: Maybe<Redirect>;
  redirectCollection?: Maybe<RedirectCollection>;
  mediaBlock?: Maybe<MediaBlock>;
  mediaBlockCollection?: Maybe<MediaBlockCollection>;
  pressPost?: Maybe<PressPost>;
  pressPostCollection?: Maybe<PressPostCollection>;
  socialMedia?: Maybe<SocialMedia>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
  list?: Maybe<List>;
  listCollection?: Maybe<ListCollection>;
  markdownBody?: Maybe<MarkdownBody>;
  markdownBodyCollection?: Maybe<MarkdownBodyCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  quote2?: Maybe<Quote2>;
  quote2Collection?: Maybe<Quote2Collection>;
  logo?: Maybe<Logo>;
  logoCollection?: Maybe<LogoCollection>;
  listBlock?: Maybe<ListBlock>;
  listBlockCollection?: Maybe<ListBlockCollection>;
  blogCategory?: Maybe<BlogCategory>;
  blogCategoryCollection?: Maybe<BlogCategoryCollection>;
  navLink?: Maybe<NavLink>;
  navLinkCollection?: Maybe<NavLinkCollection>;
  topNotification?: Maybe<TopNotification>;
  topNotificationCollection?: Maybe<TopNotificationCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryHomeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HomeFilter>;
  order?: Maybe<Array<Maybe<HomeOrder>>>;
};


export type QueryPageTemplateArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageTemplateFilter>;
  order?: Maybe<Array<Maybe<PageTemplateOrder>>>;
};


export type QuerySectionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<SectionOrder>>>;
};


export type QueryMetadataArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMetadataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MetadataFilter>;
  order?: Maybe<Array<Maybe<MetadataOrder>>>;
};


export type QuerySectionBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlockFilter>;
  order?: Maybe<Array<Maybe<SectionBlockOrder>>>;
};


export type QueryFormArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFormCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FormFilter>;
  order?: Maybe<Array<Maybe<FormOrder>>>;
};


export type QueryGeneralDataArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<GeneralDataFilter>;
  order?: Maybe<Array<Maybe<GeneralDataOrder>>>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogPostFilter>;
  order?: Maybe<Array<Maybe<BlogPostOrder>>>;
};


export type QueryFeaturesArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeaturesFilter>;
  order?: Maybe<Array<Maybe<FeaturesOrder>>>;
};


export type QueryCallToActionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCallToActionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<CallToActionOrder>>>;
};


export type QueryTweetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryTweetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<TweetFilter>;
  order?: Maybe<Array<Maybe<TweetOrder>>>;
};


export type QueryCustomerArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCustomerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerFilter>;
  order?: Maybe<Array<Maybe<CustomerOrder>>>;
};


export type QueryPageTrustArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageTrustCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageTrustFilter>;
  order?: Maybe<Array<Maybe<PageTrustOrder>>>;
};


export type QueryPartnersCardArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPartnersCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PartnersCardFilter>;
  order?: Maybe<Array<Maybe<PartnersCardOrder>>>;
};


export type QueryPagePartnersArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPagePartnersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PagePartnersFilter>;
  order?: Maybe<Array<Maybe<PagePartnersOrder>>>;
};


export type QueryPricingPlanV2Args = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPricingPlanV2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PricingPlanV2Filter>;
  order?: Maybe<Array<Maybe<PricingPlanV2Order>>>;
};


export type QueryUsageRateArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryUsageRateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<UsageRateFilter>;
  order?: Maybe<Array<Maybe<UsageRateOrder>>>;
};


export type QueryPagePricingArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPagePricingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PagePricingFilter>;
  order?: Maybe<Array<Maybe<PagePricingOrder>>>;
};


export type QueryDescriptionMarkdownArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryDescriptionMarkdownCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<DescriptionMarkdownFilter>;
  order?: Maybe<Array<Maybe<DescriptionMarkdownOrder>>>;
};


export type QueryDescriptionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryDescriptionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<DescriptionFilter>;
  order?: Maybe<Array<Maybe<DescriptionOrder>>>;
};


export type QueryColumnArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryColumnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ColumnFilter>;
  order?: Maybe<Array<Maybe<ColumnOrder>>>;
};


export type QueryPageSitemapArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageSitemapCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageSitemapFilter>;
  order?: Maybe<Array<Maybe<PageSitemapOrder>>>;
};


export type QueryLearnArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLearnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LearnFilter>;
  order?: Maybe<Array<Maybe<LearnOrder>>>;
};


export type QueryPagePressArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPagePressCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PagePressFilter>;
  order?: Maybe<Array<Maybe<PagePressOrder>>>;
};


export type QueryPageEventsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageEventsFilter>;
  order?: Maybe<Array<Maybe<PageEventsOrder>>>;
};


export type QueryPageCustomersArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageCustomersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageCustomersFilter>;
  order?: Maybe<Array<Maybe<PageCustomersOrder>>>;
};


export type QueryCommunityArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCommunityCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CommunityFilter>;
  order?: Maybe<Array<Maybe<CommunityOrder>>>;
};


export type QueryPageClientServerlessArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageClientServerlessCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageClientServerlessFilter>;
  order?: Maybe<Array<Maybe<PageClientServerlessOrder>>>;
};


export type QueryPageCareersArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageCareersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageCareersFilter>;
  order?: Maybe<Array<Maybe<PageCareersOrder>>>;
};


export type QueryBlogArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBlogCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogFilter>;
  order?: Maybe<Array<Maybe<BlogOrder>>>;
};


export type QueryCompanyArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCompanyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CompanyFilter>;
  order?: Maybe<Array<Maybe<CompanyOrder>>>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EventFilter>;
  order?: Maybe<Array<Maybe<EventOrder>>>;
};


export type QueryLogosCollectionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLogosCollectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogosCollectionFilter>;
  order?: Maybe<Array<Maybe<LogosCollectionOrder>>>;
};


export type QueryPricingPlanArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPricingPlanCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PricingPlanFilter>;
  order?: Maybe<Array<Maybe<PricingPlanOrder>>>;
};


export type QueryRedirectsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryRedirectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<RedirectsFilter>;
  order?: Maybe<Array<Maybe<RedirectsOrder>>>;
};


export type QueryRedirectArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryRedirectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<RedirectFilter>;
  order?: Maybe<Array<Maybe<RedirectOrder>>>;
};


export type QueryMediaBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMediaBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MediaBlockFilter>;
  order?: Maybe<Array<Maybe<MediaBlockOrder>>>;
};


export type QueryPressPostArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPressPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PressPostFilter>;
  order?: Maybe<Array<Maybe<PressPostOrder>>>;
};


export type QuerySocialMediaArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySocialMediaCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SocialMediaFilter>;
  order?: Maybe<Array<Maybe<SocialMediaOrder>>>;
};


export type QueryListArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryListCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ListFilter>;
  order?: Maybe<Array<Maybe<ListOrder>>>;
};


export type QueryMarkdownBodyArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMarkdownBodyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MarkdownBodyFilter>;
  order?: Maybe<Array<Maybe<MarkdownBodyOrder>>>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<Array<Maybe<PersonOrder>>>;
};


export type QueryQuote2Args = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryQuote2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<Quote2Filter>;
  order?: Maybe<Array<Maybe<Quote2Order>>>;
};


export type QueryLogoArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLogoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogoFilter>;
  order?: Maybe<Array<Maybe<LogoOrder>>>;
};


export type QueryListBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryListBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ListBlockFilter>;
  order?: Maybe<Array<Maybe<ListBlockOrder>>>;
};


export type QueryBlogCategoryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBlogCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogCategoryFilter>;
  order?: Maybe<Array<Maybe<BlogCategoryOrder>>>;
};


export type QueryNavLinkArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryNavLinkCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavLinkFilter>;
  order?: Maybe<Array<Maybe<NavLinkOrder>>>;
};


export type QueryTopNotificationArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryTopNotificationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<TopNotificationFilter>;
  order?: Maybe<Array<Maybe<TopNotificationOrder>>>;
};


export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2 = Entry & {
  __typename?: 'Quote2';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<Quote2LinkingCollections>;
  quote?: Maybe<Scalars['String']>;
  logo?: Maybe<Logo>;
  person?: Maybe<Person>;
  action?: Maybe<CallToAction>;
};


/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2LinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2QuoteArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2LogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogoFilter>;
};


/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2PersonArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
};


/** A quote/review. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/quote2) */
export type Quote2ActionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};

export type Quote2Collection = {
  __typename?: 'Quote2Collection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Quote2>>;
};

export type Quote2Filter = {
  logo?: Maybe<CfLogoNestedFilter>;
  person?: Maybe<CfPersonNestedFilter>;
  action?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  quote_exists?: Maybe<Scalars['Boolean']>;
  quote?: Maybe<Scalars['String']>;
  quote_not?: Maybe<Scalars['String']>;
  quote_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  quote_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  quote_contains?: Maybe<Scalars['String']>;
  quote_not_contains?: Maybe<Scalars['String']>;
  logo_exists?: Maybe<Scalars['Boolean']>;
  person_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<Quote2Filter>>>;
  AND?: Maybe<Array<Maybe<Quote2Filter>>>;
};

export type Quote2LinkingCollections = {
  __typename?: 'Quote2LinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
};


export type Quote2LinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type Quote2LinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<Quote2LinkingCollectionsSectionCollectionOrder>>>;
};


export type Quote2LinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<Quote2LinkingCollectionsSectionBlockCollectionOrder>>>;
};

export enum Quote2LinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum Quote2LinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum Quote2Order {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirect) */
export type Redirect = Entry & {
  __typename?: 'Redirect';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<RedirectLinkingCollections>;
  source?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  permanent?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirect) */
export type RedirectLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirect) */
export type RedirectSourceArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirect) */
export type RedirectDestinationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirect) */
export type RedirectPermanentArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type RedirectCollection = {
  __typename?: 'RedirectCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Redirect>>;
};

export type RedirectFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  source_exists?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_contains?: Maybe<Scalars['String']>;
  source_not_contains?: Maybe<Scalars['String']>;
  destination_exists?: Maybe<Scalars['Boolean']>;
  destination?: Maybe<Scalars['String']>;
  destination_not?: Maybe<Scalars['String']>;
  destination_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  destination_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  destination_contains?: Maybe<Scalars['String']>;
  destination_not_contains?: Maybe<Scalars['String']>;
  permanent_exists?: Maybe<Scalars['Boolean']>;
  permanent?: Maybe<Scalars['Boolean']>;
  permanent_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<RedirectFilter>>>;
  AND?: Maybe<Array<Maybe<RedirectFilter>>>;
};

export type RedirectLinkingCollections = {
  __typename?: 'RedirectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  redirectsCollection?: Maybe<RedirectsCollection>;
};


export type RedirectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type RedirectLinkingCollectionsRedirectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<RedirectLinkingCollectionsRedirectsCollectionOrder>>>;
};

export enum RedirectLinkingCollectionsRedirectsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum RedirectOrder {
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  PermanentAsc = 'permanent_ASC',
  PermanentDesc = 'permanent_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** All redirects will go here. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirects) */
export type Redirects = Entry & {
  __typename?: 'Redirects';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<RedirectsLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  redirectsCollection?: Maybe<RedirectsRedirectsCollection>;
};


/** All redirects will go here. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirects) */
export type RedirectsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** All redirects will go here. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirects) */
export type RedirectsNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** All redirects will go here. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/redirects) */
export type RedirectsRedirectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<RedirectFilter>;
  order?: Maybe<Array<Maybe<RedirectsRedirectsCollectionOrder>>>;
};

export type RedirectsCollection = {
  __typename?: 'RedirectsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Redirects>>;
};

export type RedirectsFilter = {
  redirects?: Maybe<CfRedirectNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  redirectsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<RedirectsFilter>>>;
  AND?: Maybe<Array<Maybe<RedirectsFilter>>>;
};

export type RedirectsLinkingCollections = {
  __typename?: 'RedirectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RedirectsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum RedirectsOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type RedirectsRedirectsCollection = {
  __typename?: 'RedirectsRedirectsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Redirect>>;
};

export enum RedirectsRedirectsCollectionOrder {
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC',
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  PermanentAsc = 'permanent_ASC',
  PermanentDesc = 'permanent_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  type: Scalars['String'];
  urn: Scalars['String'];
  linkType: Scalars['String'];
};

/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type Section = Entry & {
  __typename?: 'Section';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  sectionName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  anchorLinkId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<SectionSubtitle>;
  actionsCollection?: Maybe<SectionActionsCollection>;
  blocksCollection?: Maybe<SectionBlocksCollection>;
  markdownBody?: Maybe<Scalars['String']>;
  logosCollection?: Maybe<LogosCollection>;
  type?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  hasLinearBackground?: Maybe<Scalars['Boolean']>;
  backgroundImage?: Maybe<Asset>;
  compactMode?: Maybe<Scalars['Boolean']>;
  textBelowSection?: Maybe<Scalars['String']>;
  additionalTitle?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionSectionNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionAnchorLinkIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<SectionActionsCollectionOrder>>>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionBlocksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionBlocksFilter>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionMarkdownBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionLogosCollectionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LogosCollectionFilter>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionHasLinearBackgroundArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionBackgroundImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionCompactModeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionTextBelowSectionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A module inside a page. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/section) */
export type SectionAdditionalTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SectionActionsCollection = {
  __typename?: 'SectionActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum SectionActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlock = Entry & {
  __typename?: 'SectionBlock';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SectionBlockLinkingCollections>;
  objectName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<SectionBlockSubtitle>;
  actionsCollection?: Maybe<SectionBlockActionsCollection>;
  media?: Maybe<Asset>;
  icon?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Asset>;
  anchorLinkId?: Maybe<Scalars['String']>;
  customerProof?: Maybe<SectionBlockCustomerProof>;
  form?: Maybe<Form>;
  additionalTitle?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockObjectNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockActionsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
  order?: Maybe<Array<Maybe<SectionBlockActionsCollectionOrder>>>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockIconArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockBackgroundImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockAnchorLinkIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockCustomerProofArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockFormArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FormFilter>;
};


/** A title, a subtitle and some CTAs. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/sectionBlock) */
export type SectionBlockAdditionalTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SectionBlockActionsCollection = {
  __typename?: 'SectionBlockActionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CallToAction>>;
};

export enum SectionBlockActionsCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  ChildrenAsc = 'children_ASC',
  ChildrenDesc = 'children_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  MenuCategoryAsc = 'menuCategory_ASC',
  MenuCategoryDesc = 'menuCategory_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SectionBlockCollection = {
  __typename?: 'SectionBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SectionBlock>>;
};

export type SectionBlockCustomerProof = Person | Quote2 | Tweet;

export type SectionBlockFilter = {
  actions?: Maybe<CfCallToActionNestedFilter>;
  form?: Maybe<CfFormNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  media_exists?: Maybe<Scalars['Boolean']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  backgroundImage_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId?: Maybe<Scalars['String']>;
  anchorLinkId_not?: Maybe<Scalars['String']>;
  anchorLinkId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_contains?: Maybe<Scalars['String']>;
  anchorLinkId_not_contains?: Maybe<Scalars['String']>;
  customerProof_exists?: Maybe<Scalars['Boolean']>;
  form_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle?: Maybe<Scalars['String']>;
  additionalTitle_not?: Maybe<Scalars['String']>;
  additionalTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_contains?: Maybe<Scalars['String']>;
  additionalTitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SectionBlockFilter>>>;
  AND?: Maybe<Array<Maybe<SectionBlockFilter>>>;
};

export type SectionBlockLinkingCollections = {
  __typename?: 'SectionBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  pagePricingCollection?: Maybe<PagePricingCollection>;
  pagePressCollection?: Maybe<PagePressCollection>;
  blogCollection?: Maybe<BlogCollection>;
};


export type SectionBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SectionBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionBlockLinkingCollectionsSectionCollectionOrder>>>;
};


export type SectionBlockLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionBlockLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type SectionBlockLinkingCollectionsPagePricingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionBlockLinkingCollectionsPagePricingCollectionOrder>>>;
};


export type SectionBlockLinkingCollectionsPagePressCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionBlockLinkingCollectionsPagePressCollectionOrder>>>;
};


export type SectionBlockLinkingCollectionsBlogCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionBlockLinkingCollectionsBlogCollectionOrder>>>;
};

export enum SectionBlockLinkingCollectionsBlogCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionBlockLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionBlockLinkingCollectionsPagePressCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionBlockLinkingCollectionsPagePricingCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  VariantWeightAsc = 'variantWeight_ASC',
  VariantWeightDesc = 'variantWeight_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  ComingSoonTextAsc = 'comingSoonText_ASC',
  ComingSoonTextDesc = 'comingSoonText_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionBlockLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionBlockOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SectionBlockSubtitle = {
  __typename?: 'SectionBlockSubtitle';
  json: Scalars['JSON'];
  links: SectionBlockSubtitleLinks;
};

export type SectionBlockSubtitleAssets = {
  __typename?: 'SectionBlockSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type SectionBlockSubtitleEntries = {
  __typename?: 'SectionBlockSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type SectionBlockSubtitleLinks = {
  __typename?: 'SectionBlockSubtitleLinks';
  entries: SectionBlockSubtitleEntries;
  assets: SectionBlockSubtitleAssets;
  resources: SectionBlockSubtitleResources;
};

export type SectionBlockSubtitleResources = {
  __typename?: 'SectionBlockSubtitleResources';
  block: Array<ResourceLink>;
};

export type SectionBlocksCollection = {
  __typename?: 'SectionBlocksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SectionBlocksItem>>;
};

export type SectionBlocksFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<SectionBlocksFilter>>>;
  AND?: Maybe<Array<Maybe<SectionBlocksFilter>>>;
};

export type SectionBlocksItem = BlogPost | CallToAction | Column | Customer | Event | Form | ListBlock | MarkdownBody | MediaBlock | PartnersCard | Person | PricingPlan | PricingPlanV2 | Quote2 | SectionBlock | Tweet;

export type SectionCollection = {
  __typename?: 'SectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export type SectionFilter = {
  actions?: Maybe<CfCallToActionNestedFilter>;
  blocks?: Maybe<CfblocksMultiTypeNestedFilter>;
  logosCollection?: Maybe<CfLogosCollectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  sectionName_exists?: Maybe<Scalars['Boolean']>;
  sectionName?: Maybe<Scalars['String']>;
  sectionName_not?: Maybe<Scalars['String']>;
  sectionName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionName_contains?: Maybe<Scalars['String']>;
  sectionName_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  anchorLinkId_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId?: Maybe<Scalars['String']>;
  anchorLinkId_not?: Maybe<Scalars['String']>;
  anchorLinkId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_contains?: Maybe<Scalars['String']>;
  anchorLinkId_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  blocksCollection_exists?: Maybe<Scalars['Boolean']>;
  markdownBody_exists?: Maybe<Scalars['Boolean']>;
  markdownBody?: Maybe<Scalars['String']>;
  markdownBody_not?: Maybe<Scalars['String']>;
  markdownBody_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdownBody_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdownBody_contains?: Maybe<Scalars['String']>;
  markdownBody_not_contains?: Maybe<Scalars['String']>;
  logosCollection_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  hasLinearBackground_exists?: Maybe<Scalars['Boolean']>;
  hasLinearBackground?: Maybe<Scalars['Boolean']>;
  hasLinearBackground_not?: Maybe<Scalars['Boolean']>;
  backgroundImage_exists?: Maybe<Scalars['Boolean']>;
  compactMode_exists?: Maybe<Scalars['Boolean']>;
  compactMode?: Maybe<Scalars['Boolean']>;
  compactMode_not?: Maybe<Scalars['Boolean']>;
  textBelowSection_exists?: Maybe<Scalars['Boolean']>;
  textBelowSection?: Maybe<Scalars['String']>;
  textBelowSection_not?: Maybe<Scalars['String']>;
  textBelowSection_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textBelowSection_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textBelowSection_contains?: Maybe<Scalars['String']>;
  textBelowSection_not_contains?: Maybe<Scalars['String']>;
  additionalTitle_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle?: Maybe<Scalars['String']>;
  additionalTitle_not?: Maybe<Scalars['String']>;
  additionalTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_contains?: Maybe<Scalars['String']>;
  additionalTitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SectionFilter>>>;
  AND?: Maybe<Array<Maybe<SectionFilter>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  featuresCollection?: Maybe<FeaturesCollection>;
  pageTrustCollection?: Maybe<PageTrustCollection>;
  pagePartnersCollection?: Maybe<PagePartnersCollection>;
  pagePricingCollection?: Maybe<PagePricingCollection>;
  learnCollection?: Maybe<LearnCollection>;
  pageEventsCollection?: Maybe<PageEventsCollection>;
  pageCustomersCollection?: Maybe<PageCustomersCollection>;
  communityCollection?: Maybe<CommunityCollection>;
  pageClientServerlessCollection?: Maybe<PageClientServerlessCollection>;
  pageCareersCollection?: Maybe<PageCareersCollection>;
  companyCollection?: Maybe<CompanyCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SectionLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsHomeCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageTemplateCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageTemplateCollectionOrder>>>;
};


export type SectionLinkingCollectionsFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsFeaturesCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageTrustCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageTrustCollectionOrder>>>;
};


export type SectionLinkingCollectionsPagePartnersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPagePartnersCollectionOrder>>>;
};


export type SectionLinkingCollectionsPagePricingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPagePricingCollectionOrder>>>;
};


export type SectionLinkingCollectionsLearnCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsLearnCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageEventsCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageCustomersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageCustomersCollectionOrder>>>;
};


export type SectionLinkingCollectionsCommunityCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsCommunityCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageClientServerlessCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageClientServerlessCollectionOrder>>>;
};


export type SectionLinkingCollectionsPageCareersCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsPageCareersCollectionOrder>>>;
};


export type SectionLinkingCollectionsCompanyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SectionLinkingCollectionsCompanyCollectionOrder>>>;
};

export enum SectionLinkingCollectionsCommunityCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsCompanyCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsFeaturesCollectionOrder {
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SubIdAsc = 'subId_ASC',
  SubIdDesc = 'subId_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsHomeCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
  UseBuilderAsc = 'useBuilder_ASC',
  UseBuilderDesc = 'useBuilder_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsLearnCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageCareersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageClientServerlessCollectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageCustomersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageEventsCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPagePartnersCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPagePricingCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  VariantWeightAsc = 'variantWeight_ASC',
  VariantWeightDesc = 'variantWeight_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  ComingSoonTextAsc = 'comingSoonText_ASC',
  ComingSoonTextDesc = 'comingSoonText_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageTemplateCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  LinesInHeroAsc = 'linesInHero_ASC',
  LinesInHeroDesc = 'linesInHero_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  HeroImageStackedAsc = 'heroImageStacked_ASC',
  HeroImageStackedDesc = 'heroImageStacked_DESC',
  HeroSignUpFormAsc = 'heroSignUpForm_ASC',
  HeroSignUpFormDesc = 'heroSignUpForm_DESC',
  DarkBackgroundAsc = 'darkBackground_ASC',
  DarkBackgroundDesc = 'darkBackground_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageTrustCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HideFromSitemapAsc = 'hideFromSitemap_ASC',
  HideFromSitemapDesc = 'hideFromSitemap_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SectionSubtitle = {
  __typename?: 'SectionSubtitle';
  json: Scalars['JSON'];
  links: SectionSubtitleLinks;
};

export type SectionSubtitleAssets = {
  __typename?: 'SectionSubtitleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type SectionSubtitleEntries = {
  __typename?: 'SectionSubtitleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type SectionSubtitleLinks = {
  __typename?: 'SectionSubtitleLinks';
  entries: SectionSubtitleEntries;
  assets: SectionSubtitleAssets;
  resources: SectionSubtitleResources;
};

export type SectionSubtitleResources = {
  __typename?: 'SectionSubtitleResources';
  block: Array<ResourceLink>;
};

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMedia = Entry & {
  __typename?: 'SocialMedia';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SocialMediaLinkingCollections>;
  for?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  gitHub?: Maybe<Scalars['String']>;
  devTo?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaForArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaTwitterArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaLinkedInArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaFacebookArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaGitHubArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaDevToArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/socialMedia) */
export type SocialMediaYouTubeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SocialMediaCollection = {
  __typename?: 'SocialMediaCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SocialMedia>>;
};

export type SocialMediaFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  for_exists?: Maybe<Scalars['Boolean']>;
  for?: Maybe<Scalars['String']>;
  for_not?: Maybe<Scalars['String']>;
  for_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  for_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  for_contains?: Maybe<Scalars['String']>;
  for_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  linkedIn_exists?: Maybe<Scalars['Boolean']>;
  linkedIn?: Maybe<Scalars['String']>;
  linkedIn_not?: Maybe<Scalars['String']>;
  linkedIn_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_contains?: Maybe<Scalars['String']>;
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  facebook_not?: Maybe<Scalars['String']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_contains?: Maybe<Scalars['String']>;
  facebook_not_contains?: Maybe<Scalars['String']>;
  gitHub_exists?: Maybe<Scalars['Boolean']>;
  gitHub?: Maybe<Scalars['String']>;
  gitHub_not?: Maybe<Scalars['String']>;
  gitHub_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gitHub_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gitHub_contains?: Maybe<Scalars['String']>;
  gitHub_not_contains?: Maybe<Scalars['String']>;
  devTo_exists?: Maybe<Scalars['Boolean']>;
  devTo?: Maybe<Scalars['String']>;
  devTo_not?: Maybe<Scalars['String']>;
  devTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  devTo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  devTo_contains?: Maybe<Scalars['String']>;
  devTo_not_contains?: Maybe<Scalars['String']>;
  youTube_exists?: Maybe<Scalars['Boolean']>;
  youTube?: Maybe<Scalars['String']>;
  youTube_not?: Maybe<Scalars['String']>;
  youTube_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youTube_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youTube_contains?: Maybe<Scalars['String']>;
  youTube_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SocialMediaFilter>>>;
  AND?: Maybe<Array<Maybe<SocialMediaFilter>>>;
};

export type SocialMediaLinkingCollections = {
  __typename?: 'SocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
  personCollection?: Maybe<PersonCollection>;
};


export type SocialMediaLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SocialMediaLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SocialMediaLinkingCollectionsGeneralDataCollectionOrder>>>;
};


export type SocialMediaLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<SocialMediaLinkingCollectionsPersonCollectionOrder>>>;
};

export enum SocialMediaLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialMediaLinkingCollectionsPersonCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialMediaOrder {
  ForAsc = 'for_ASC',
  ForDesc = 'for_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  GitHubAsc = 'gitHub_ASC',
  GitHubDesc = 'gitHub_DESC',
  DevToAsc = 'devTo_ASC',
  DevToDesc = 'devTo_DESC',
  YouTubeAsc = 'youTube_ASC',
  YouTubeDesc = 'youTube_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

/** The notification on top of the navbar. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/topNotification) */
export type TopNotification = Entry & {
  __typename?: 'TopNotification';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TopNotificationLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<CallToAction>;
};


/** The notification on top of the navbar. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/topNotification) */
export type TopNotificationLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** The notification on top of the navbar. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/topNotification) */
export type TopNotificationTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** The notification on top of the navbar. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/topNotification) */
export type TopNotificationLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CallToActionFilter>;
};

export type TopNotificationCollection = {
  __typename?: 'TopNotificationCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<TopNotification>>;
};

export type TopNotificationFilter = {
  link?: Maybe<CfCallToActionNestedFilter>;
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  link_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<TopNotificationFilter>>>;
  AND?: Maybe<Array<Maybe<TopNotificationFilter>>>;
};

export type TopNotificationLinkingCollections = {
  __typename?: 'TopNotificationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalDataCollection?: Maybe<GeneralDataCollection>;
};


export type TopNotificationLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type TopNotificationLinkingCollectionsGeneralDataCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<TopNotificationLinkingCollectionsGeneralDataCollectionOrder>>>;
};

export enum TopNotificationLinkingCollectionsGeneralDataCollectionOrder {
  ContentNameAsc = 'contentName_ASC',
  ContentNameDesc = 'contentName_DESC',
  CopyrightMessageAsc = 'copyrightMessage_ASC',
  CopyrightMessageDesc = 'copyrightMessage_DESC',
  PricingPageTotalLabelAsc = 'pricingPageTotalLabel_ASC',
  PricingPageTotalLabelDesc = 'pricingPageTotalLabel_DESC',
  BlogSignUpCardTextAsc = 'blogSignUpCardText_ASC',
  BlogSignUpCardTextDesc = 'blogSignUpCardText_DESC',
  BlogReqADemoCardTextAsc = 'blogReqADemoCardText_ASC',
  BlogReqADemoCardTextDesc = 'blogReqADemoCardText_DESC',
  SufhCookieDomainAsc = 'sufhCookieDomain_ASC',
  SufhCookieDomainDesc = 'sufhCookieDomain_DESC',
  SufhApiUrlAsc = 'sufhApiUrl_ASC',
  SufhApiUrlDesc = 'sufhApiUrl_DESC',
  SufhDashboardUrlAsc = 'sufhDashboardUrl_ASC',
  SufhDashboardUrlDesc = 'sufhDashboardUrl_DESC',
  SufhCaptchaKeyAsc = 'sufhCaptchaKey_ASC',
  SufhCaptchaKeyDesc = 'sufhCaptchaKey_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopNotificationOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type Tweet = Entry & {
  __typename?: 'Tweet';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TweetLinkingCollections>;
  text?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  userTag?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type TweetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type TweetTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type TweetUserNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type TweetUserTagArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/tweet) */
export type TweetPublicationDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type TweetCollection = {
  __typename?: 'TweetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Tweet>>;
};

export type TweetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  text_exists?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  userName_exists?: Maybe<Scalars['Boolean']>;
  userName?: Maybe<Scalars['String']>;
  userName_not?: Maybe<Scalars['String']>;
  userName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName_contains?: Maybe<Scalars['String']>;
  userName_not_contains?: Maybe<Scalars['String']>;
  userTag_exists?: Maybe<Scalars['Boolean']>;
  userTag?: Maybe<Scalars['String']>;
  userTag_not?: Maybe<Scalars['String']>;
  userTag_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTag_contains?: Maybe<Scalars['String']>;
  userTag_not_contains?: Maybe<Scalars['String']>;
  publicationDate_exists?: Maybe<Scalars['Boolean']>;
  publicationDate?: Maybe<Scalars['String']>;
  publicationDate_not?: Maybe<Scalars['String']>;
  publicationDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationDate_contains?: Maybe<Scalars['String']>;
  publicationDate_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<TweetFilter>>>;
  AND?: Maybe<Array<Maybe<TweetFilter>>>;
};

export type TweetLinkingCollections = {
  __typename?: 'TweetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
  sectionBlockCollection?: Maybe<SectionBlockCollection>;
};


export type TweetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type TweetLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<TweetLinkingCollectionsSectionCollectionOrder>>>;
};


export type TweetLinkingCollectionsSectionBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<TweetLinkingCollectionsSectionBlockCollectionOrder>>>;
};

export enum TweetLinkingCollectionsSectionBlockCollectionOrder {
  ObjectNameAsc = 'objectName_ASC',
  ObjectNameDesc = 'objectName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TweetLinkingCollectionsSectionCollectionOrder {
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  AnchorLinkIdAsc = 'anchorLinkId_ASC',
  AnchorLinkIdDesc = 'anchorLinkId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  HasLinearBackgroundAsc = 'hasLinearBackground_ASC',
  HasLinearBackgroundDesc = 'hasLinearBackground_DESC',
  CompactModeAsc = 'compactMode_ASC',
  CompactModeDesc = 'compactMode_DESC',
  AdditionalTitleAsc = 'additionalTitle_ASC',
  AdditionalTitleDesc = 'additionalTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TweetOrder {
  UserNameAsc = 'userName_ASC',
  UserNameDesc = 'userName_DESC',
  UserTagAsc = 'userTag_ASC',
  UserTagDesc = 'userTag_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRate = Entry & {
  __typename?: 'UsageRate';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<UsageRateLinkingCollections>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  readOperationsMillion?: Maybe<Scalars['Float']>;
  writeOperationsMillion?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion?: Maybe<Scalars['Float']>;
  storageGb?: Maybe<Scalars['Float']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateLabelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateReadOperationsMillionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateWriteOperationsMillionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateTransactionalComputeOperationsMillionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Contains read ops, write ops, compute ops, and storage rates. [See type definition](https://app.contentful.com/spaces/po4qc9xpmpuh/content_types/usageRate) */
export type UsageRateStorageGbArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type UsageRateCollection = {
  __typename?: 'UsageRateCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<UsageRate>>;
};

export type UsageRateFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  label_exists?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  readOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  readOperationsMillion?: Maybe<Scalars['Float']>;
  readOperationsMillion_not?: Maybe<Scalars['Float']>;
  readOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  readOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  readOperationsMillion_gt?: Maybe<Scalars['Float']>;
  readOperationsMillion_gte?: Maybe<Scalars['Float']>;
  readOperationsMillion_lt?: Maybe<Scalars['Float']>;
  readOperationsMillion_lte?: Maybe<Scalars['Float']>;
  writeOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  writeOperationsMillion?: Maybe<Scalars['Float']>;
  writeOperationsMillion_not?: Maybe<Scalars['Float']>;
  writeOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  writeOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  writeOperationsMillion_gt?: Maybe<Scalars['Float']>;
  writeOperationsMillion_gte?: Maybe<Scalars['Float']>;
  writeOperationsMillion_lt?: Maybe<Scalars['Float']>;
  writeOperationsMillion_lte?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  transactionalComputeOperationsMillion?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_not?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  transactionalComputeOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  transactionalComputeOperationsMillion_gt?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_gte?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_lt?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_lte?: Maybe<Scalars['Float']>;
  storageGb_exists?: Maybe<Scalars['Boolean']>;
  storageGb?: Maybe<Scalars['Float']>;
  storageGb_not?: Maybe<Scalars['Float']>;
  storageGb_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  storageGb_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  storageGb_gt?: Maybe<Scalars['Float']>;
  storageGb_gte?: Maybe<Scalars['Float']>;
  storageGb_lt?: Maybe<Scalars['Float']>;
  storageGb_lte?: Maybe<Scalars['Float']>;
  OR?: Maybe<Array<Maybe<UsageRateFilter>>>;
  AND?: Maybe<Array<Maybe<UsageRateFilter>>>;
};

export type UsageRateLinkingCollections = {
  __typename?: 'UsageRateLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pricingPlanV2Collection?: Maybe<PricingPlanV2Collection>;
  pricingPlanCollection?: Maybe<PricingPlanCollection>;
};


export type UsageRateLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type UsageRateLinkingCollectionsPricingPlanV2CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<UsageRateLinkingCollectionsPricingPlanV2CollectionOrder>>>;
};


export type UsageRateLinkingCollectionsPricingPlanCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<UsageRateLinkingCollectionsPricingPlanCollectionOrder>>>;
};

export enum UsageRateLinkingCollectionsPricingPlanCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum UsageRateLinkingCollectionsPricingPlanV2CollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceLabelAsc = 'priceLabel_ASC',
  PriceLabelDesc = 'priceLabel_DESC',
  AnnualPriceLabelAsc = 'annualPriceLabel_ASC',
  AnnualPriceLabelDesc = 'annualPriceLabel_DESC',
  CreditsPerMonthAsc = 'creditsPerMonth_ASC',
  CreditsPerMonthDesc = 'creditsPerMonth_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum UsageRateOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  ReadOperationsMillionAsc = 'readOperationsMillion_ASC',
  ReadOperationsMillionDesc = 'readOperationsMillion_DESC',
  WriteOperationsMillionAsc = 'writeOperationsMillion_ASC',
  WriteOperationsMillionDesc = 'writeOperationsMillion_DESC',
  TransactionalComputeOperationsMillionAsc = 'transactionalComputeOperationsMillion_ASC',
  TransactionalComputeOperationsMillionDesc = 'transactionalComputeOperationsMillion_DESC',
  StorageGbAsc = 'storageGb_ASC',
  StorageGbDesc = 'storageGb_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfBlogCategoryNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfBlogCategoryNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfBlogCategoryNestedFilter>>>;
};

export type CfBlogPostNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  metadata_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  additionalSlugs_exists?: Maybe<Scalars['Boolean']>;
  additionalSlugs_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalSlugs_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalSlugs_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  coverImage_exists?: Maybe<Scalars['Boolean']>;
  thumbnailImage_exists?: Maybe<Scalars['Boolean']>;
  categoriesCollection_exists?: Maybe<Scalars['Boolean']>;
  isCommunityPost_exists?: Maybe<Scalars['Boolean']>;
  isCommunityPost?: Maybe<Scalars['Boolean']>;
  isCommunityPost_not?: Maybe<Scalars['Boolean']>;
  authorsCollection_exists?: Maybe<Scalars['Boolean']>;
  excerpt_exists?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  excerpt_not?: Maybe<Scalars['String']>;
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_contains?: Maybe<Scalars['String']>;
  excerpt_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  body2_exists?: Maybe<Scalars['Boolean']>;
  body2?: Maybe<Scalars['String']>;
  body2_not?: Maybe<Scalars['String']>;
  body2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body2_contains?: Maybe<Scalars['String']>;
  body2_not_contains?: Maybe<Scalars['String']>;
  lastUpdated_exists?: Maybe<Scalars['Boolean']>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
  lastUpdated_not?: Maybe<Scalars['DateTime']>;
  lastUpdated_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastUpdated_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastUpdated_gt?: Maybe<Scalars['DateTime']>;
  lastUpdated_gte?: Maybe<Scalars['DateTime']>;
  lastUpdated_lt?: Maybe<Scalars['DateTime']>;
  lastUpdated_lte?: Maybe<Scalars['DateTime']>;
  relatedPostsCollection_exists?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts_exists?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts?: Maybe<Scalars['Boolean']>;
  hideFromRelatedPosts_not?: Maybe<Scalars['Boolean']>;
  canonicalLink_exists?: Maybe<Scalars['Boolean']>;
  canonicalLink?: Maybe<Scalars['String']>;
  canonicalLink_not?: Maybe<Scalars['String']>;
  canonicalLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalLink_contains?: Maybe<Scalars['String']>;
  canonicalLink_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfBlogPostNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfBlogPostNestedFilter>>>;
};

export type CfCallToActionNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  href_exists?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  href_not?: Maybe<Scalars['String']>;
  href_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_contains?: Maybe<Scalars['String']>;
  href_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  labelDescription_exists?: Maybe<Scalars['Boolean']>;
  labelDescription?: Maybe<Scalars['String']>;
  labelDescription_not?: Maybe<Scalars['String']>;
  labelDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  labelDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  labelDescription_contains?: Maybe<Scalars['String']>;
  labelDescription_not_contains?: Maybe<Scalars['String']>;
  menuCategory_exists?: Maybe<Scalars['Boolean']>;
  menuCategory?: Maybe<Scalars['String']>;
  menuCategory_not?: Maybe<Scalars['String']>;
  menuCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  menuCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  menuCategory_contains?: Maybe<Scalars['String']>;
  menuCategory_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfCallToActionNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfCallToActionNestedFilter>>>;
};

export type CfEventNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  eventTitle_exists?: Maybe<Scalars['Boolean']>;
  eventTitle?: Maybe<Scalars['String']>;
  eventTitle_not?: Maybe<Scalars['String']>;
  eventTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventTitle_contains?: Maybe<Scalars['String']>;
  eventTitle_not_contains?: Maybe<Scalars['String']>;
  eventDescription_exists?: Maybe<Scalars['Boolean']>;
  eventDescription_contains?: Maybe<Scalars['String']>;
  eventDescription_not_contains?: Maybe<Scalars['String']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  eventStartDate_exists?: Maybe<Scalars['Boolean']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  eventStartDate_not?: Maybe<Scalars['DateTime']>;
  eventStartDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventStartDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventStartDate_gt?: Maybe<Scalars['DateTime']>;
  eventStartDate_gte?: Maybe<Scalars['DateTime']>;
  eventStartDate_lt?: Maybe<Scalars['DateTime']>;
  eventStartDate_lte?: Maybe<Scalars['DateTime']>;
  eventEndDate_exists?: Maybe<Scalars['Boolean']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventEndDate_not?: Maybe<Scalars['DateTime']>;
  eventEndDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventEndDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  eventEndDate_gt?: Maybe<Scalars['DateTime']>;
  eventEndDate_gte?: Maybe<Scalars['DateTime']>;
  eventEndDate_lt?: Maybe<Scalars['DateTime']>;
  eventEndDate_lte?: Maybe<Scalars['DateTime']>;
  eventUrl_exists?: Maybe<Scalars['Boolean']>;
  eventUrl?: Maybe<Scalars['String']>;
  eventUrl_not?: Maybe<Scalars['String']>;
  eventUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventUrl_contains?: Maybe<Scalars['String']>;
  eventUrl_not_contains?: Maybe<Scalars['String']>;
  eventLocation_exists?: Maybe<Scalars['Boolean']>;
  eventLocation?: Maybe<Scalars['String']>;
  eventLocation_not?: Maybe<Scalars['String']>;
  eventLocation_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLocation_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLocation_contains?: Maybe<Scalars['String']>;
  eventLocation_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfEventNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfEventNestedFilter>>>;
};

export type CfFormNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  actionUrl_exists?: Maybe<Scalars['Boolean']>;
  actionUrl?: Maybe<Scalars['String']>;
  actionUrl_not?: Maybe<Scalars['String']>;
  actionUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionUrl_contains?: Maybe<Scalars['String']>;
  actionUrl_not_contains?: Maybe<Scalars['String']>;
  fields_exists?: Maybe<Scalars['Boolean']>;
  buttonLabel_exists?: Maybe<Scalars['Boolean']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonLabel_not?: Maybe<Scalars['String']>;
  buttonLabel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonLabel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonLabel_contains?: Maybe<Scalars['String']>;
  buttonLabel_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfFormNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfFormNestedFilter>>>;
};

export type CfListNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  items_exists?: Maybe<Scalars['Boolean']>;
  items_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  items_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  items_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<CfListNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfListNestedFilter>>>;
};

export type CfLogoNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfLogoNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfLogoNestedFilter>>>;
};

export type CfLogosCollectionNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  tagline_exists?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_not?: Maybe<Scalars['String']>;
  tagline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_contains?: Maybe<Scalars['String']>;
  tagline_not_contains?: Maybe<Scalars['String']>;
  logosCollection_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfLogosCollectionNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfLogosCollectionNestedFilter>>>;
};

export type CfMetadataNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfMetadataNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfMetadataNestedFilter>>>;
};

export type CfNavLinkNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  dropdownLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfNavLinkNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfNavLinkNestedFilter>>>;
};

export type CfPersonNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  position_exists?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['String']>;
  position_not?: Maybe<Scalars['String']>;
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_contains?: Maybe<Scalars['String']>;
  position_not_contains?: Maybe<Scalars['String']>;
  bio_exists?: Maybe<Scalars['Boolean']>;
  bio?: Maybe<Scalars['String']>;
  bio_not?: Maybe<Scalars['String']>;
  bio_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bio_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bio_contains?: Maybe<Scalars['String']>;
  bio_not_contains?: Maybe<Scalars['String']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  socialMedia_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfPersonNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfPersonNestedFilter>>>;
};

export type CfPressPostNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  publicationName_exists?: Maybe<Scalars['Boolean']>;
  publicationName?: Maybe<Scalars['String']>;
  publicationName_not?: Maybe<Scalars['String']>;
  publicationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationName_contains?: Maybe<Scalars['String']>;
  publicationName_not_contains?: Maybe<Scalars['String']>;
  coverImage_exists?: Maybe<Scalars['Boolean']>;
  action_exists?: Maybe<Scalars['Boolean']>;
  excerpt_exists?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  excerpt_not?: Maybe<Scalars['String']>;
  excerpt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt_contains?: Maybe<Scalars['String']>;
  excerpt_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfPressPostNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfPressPostNestedFilter>>>;
};

export type CfRedirectNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  source_exists?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_contains?: Maybe<Scalars['String']>;
  source_not_contains?: Maybe<Scalars['String']>;
  destination_exists?: Maybe<Scalars['Boolean']>;
  destination?: Maybe<Scalars['String']>;
  destination_not?: Maybe<Scalars['String']>;
  destination_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  destination_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  destination_contains?: Maybe<Scalars['String']>;
  destination_not_contains?: Maybe<Scalars['String']>;
  permanent_exists?: Maybe<Scalars['Boolean']>;
  permanent?: Maybe<Scalars['Boolean']>;
  permanent_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfRedirectNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfRedirectNestedFilter>>>;
};

export type CfSectionBlockNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  objectName_exists?: Maybe<Scalars['Boolean']>;
  objectName?: Maybe<Scalars['String']>;
  objectName_not?: Maybe<Scalars['String']>;
  objectName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectName_contains?: Maybe<Scalars['String']>;
  objectName_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  media_exists?: Maybe<Scalars['Boolean']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  backgroundImage_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId?: Maybe<Scalars['String']>;
  anchorLinkId_not?: Maybe<Scalars['String']>;
  anchorLinkId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_contains?: Maybe<Scalars['String']>;
  anchorLinkId_not_contains?: Maybe<Scalars['String']>;
  customerProof_exists?: Maybe<Scalars['Boolean']>;
  form_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle?: Maybe<Scalars['String']>;
  additionalTitle_not?: Maybe<Scalars['String']>;
  additionalTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_contains?: Maybe<Scalars['String']>;
  additionalTitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfSectionBlockNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSectionBlockNestedFilter>>>;
};

export type CfSectionNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  sectionName_exists?: Maybe<Scalars['Boolean']>;
  sectionName?: Maybe<Scalars['String']>;
  sectionName_not?: Maybe<Scalars['String']>;
  sectionName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionName_contains?: Maybe<Scalars['String']>;
  sectionName_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  anchorLinkId_exists?: Maybe<Scalars['Boolean']>;
  anchorLinkId?: Maybe<Scalars['String']>;
  anchorLinkId_not?: Maybe<Scalars['String']>;
  anchorLinkId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  anchorLinkId_contains?: Maybe<Scalars['String']>;
  anchorLinkId_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  actionsCollection_exists?: Maybe<Scalars['Boolean']>;
  blocksCollection_exists?: Maybe<Scalars['Boolean']>;
  markdownBody_exists?: Maybe<Scalars['Boolean']>;
  markdownBody?: Maybe<Scalars['String']>;
  markdownBody_not?: Maybe<Scalars['String']>;
  markdownBody_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdownBody_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdownBody_contains?: Maybe<Scalars['String']>;
  markdownBody_not_contains?: Maybe<Scalars['String']>;
  logosCollection_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  hasLinearBackground_exists?: Maybe<Scalars['Boolean']>;
  hasLinearBackground?: Maybe<Scalars['Boolean']>;
  hasLinearBackground_not?: Maybe<Scalars['Boolean']>;
  backgroundImage_exists?: Maybe<Scalars['Boolean']>;
  compactMode_exists?: Maybe<Scalars['Boolean']>;
  compactMode?: Maybe<Scalars['Boolean']>;
  compactMode_not?: Maybe<Scalars['Boolean']>;
  textBelowSection_exists?: Maybe<Scalars['Boolean']>;
  textBelowSection?: Maybe<Scalars['String']>;
  textBelowSection_not?: Maybe<Scalars['String']>;
  textBelowSection_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textBelowSection_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  textBelowSection_contains?: Maybe<Scalars['String']>;
  textBelowSection_not_contains?: Maybe<Scalars['String']>;
  additionalTitle_exists?: Maybe<Scalars['Boolean']>;
  additionalTitle?: Maybe<Scalars['String']>;
  additionalTitle_not?: Maybe<Scalars['String']>;
  additionalTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalTitle_contains?: Maybe<Scalars['String']>;
  additionalTitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfSectionNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSectionNestedFilter>>>;
};

export type CfSocialMediaNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  for_exists?: Maybe<Scalars['Boolean']>;
  for?: Maybe<Scalars['String']>;
  for_not?: Maybe<Scalars['String']>;
  for_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  for_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  for_contains?: Maybe<Scalars['String']>;
  for_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  linkedIn_exists?: Maybe<Scalars['Boolean']>;
  linkedIn?: Maybe<Scalars['String']>;
  linkedIn_not?: Maybe<Scalars['String']>;
  linkedIn_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_contains?: Maybe<Scalars['String']>;
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  facebook_not?: Maybe<Scalars['String']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_contains?: Maybe<Scalars['String']>;
  facebook_not_contains?: Maybe<Scalars['String']>;
  gitHub_exists?: Maybe<Scalars['Boolean']>;
  gitHub?: Maybe<Scalars['String']>;
  gitHub_not?: Maybe<Scalars['String']>;
  gitHub_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gitHub_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gitHub_contains?: Maybe<Scalars['String']>;
  gitHub_not_contains?: Maybe<Scalars['String']>;
  devTo_exists?: Maybe<Scalars['Boolean']>;
  devTo?: Maybe<Scalars['String']>;
  devTo_not?: Maybe<Scalars['String']>;
  devTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  devTo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  devTo_contains?: Maybe<Scalars['String']>;
  devTo_not_contains?: Maybe<Scalars['String']>;
  youTube_exists?: Maybe<Scalars['Boolean']>;
  youTube?: Maybe<Scalars['String']>;
  youTube_not?: Maybe<Scalars['String']>;
  youTube_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youTube_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youTube_contains?: Maybe<Scalars['String']>;
  youTube_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfSocialMediaNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSocialMediaNestedFilter>>>;
};

export type CfTopNotificationNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  link_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfTopNotificationNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfTopNotificationNestedFilter>>>;
};

export type CfUsageRateNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  label_exists?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  readOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  readOperationsMillion?: Maybe<Scalars['Float']>;
  readOperationsMillion_not?: Maybe<Scalars['Float']>;
  readOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  readOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  readOperationsMillion_gt?: Maybe<Scalars['Float']>;
  readOperationsMillion_gte?: Maybe<Scalars['Float']>;
  readOperationsMillion_lt?: Maybe<Scalars['Float']>;
  readOperationsMillion_lte?: Maybe<Scalars['Float']>;
  writeOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  writeOperationsMillion?: Maybe<Scalars['Float']>;
  writeOperationsMillion_not?: Maybe<Scalars['Float']>;
  writeOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  writeOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  writeOperationsMillion_gt?: Maybe<Scalars['Float']>;
  writeOperationsMillion_gte?: Maybe<Scalars['Float']>;
  writeOperationsMillion_lt?: Maybe<Scalars['Float']>;
  writeOperationsMillion_lte?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_exists?: Maybe<Scalars['Boolean']>;
  transactionalComputeOperationsMillion?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_not?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  transactionalComputeOperationsMillion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  transactionalComputeOperationsMillion_gt?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_gte?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_lt?: Maybe<Scalars['Float']>;
  transactionalComputeOperationsMillion_lte?: Maybe<Scalars['Float']>;
  storageGb_exists?: Maybe<Scalars['Boolean']>;
  storageGb?: Maybe<Scalars['Float']>;
  storageGb_not?: Maybe<Scalars['Float']>;
  storageGb_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  storageGb_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  storageGb_gt?: Maybe<Scalars['Float']>;
  storageGb_gte?: Maybe<Scalars['Float']>;
  storageGb_lt?: Maybe<Scalars['Float']>;
  storageGb_lte?: Maybe<Scalars['Float']>;
  OR?: Maybe<Array<Maybe<CfUsageRateNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfUsageRateNestedFilter>>>;
};

export type CfblocksMultiTypeNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<CfblocksMultiTypeNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfblocksMultiTypeNestedFilter>>>;
};

export type CfnavCenterLinksMultiTypeNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfnavCenterLinksMultiTypeNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfnavCenterLinksMultiTypeNestedFilter>>>;
};

export type CfnavMenuLinksMultiTypeNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfnavMenuLinksMultiTypeNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfnavMenuLinksMultiTypeNestedFilter>>>;
};

export type CfnavRightLinksMultiTypeNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  children_exists?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Scalars['String']>;
  children_not?: Maybe<Scalars['String']>;
  children_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  children_contains?: Maybe<Scalars['String']>;
  children_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfnavRightLinksMultiTypeNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfnavRightLinksMultiTypeNestedFilter>>>;
};

export type CfrowsMultiTypeNestedFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfrowsMultiTypeNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfrowsMultiTypeNestedFilter>>>;
};

export type CategoryFragment = (
  { __typename?: 'BlogCategory' }
  & Pick<BlogCategory, 'title' | 'slug'>
);

export type RelatedPostFragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'title' | 'slug'>
);

export type BlogPostNoCategoryMetaFragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'title' | 'slug' | 'additionalSlugs' | 'date' | 'excerpt' | 'isCommunityPost' | 'lastUpdated' | 'hideFromRelatedPosts' | 'canonicalLink'>
  & { coverImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, thumbnailImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, authorsCollection?: Maybe<(
    { __typename?: 'BlogPostAuthorsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Person' }
      & PersonFragment
    )>> }
  )> }
);

export type BlogPostMetaFragment = (
  { __typename?: 'BlogPost' }
  & { categoriesCollection?: Maybe<(
    { __typename?: 'BlogPostCategoriesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogCategory' }
      & CategoryFragment
    )>> }
  )> }
  & BlogPostNoCategoryMetaFragment
);

export type BlogPostFragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'body' | 'body2'>
  & { metadata?: Maybe<(
    { __typename?: 'Metadata' }
    & MetadataFragment
  )>, relatedPostsCollection?: Maybe<(
    { __typename?: 'BlogPostRelatedPostsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogPost' }
      & RelatedPostFragment
    )>> }
  )> }
  & BlogPostMetaFragment
);

export type LinkFragment = (
  { __typename?: 'CallToAction' }
  & Pick<CallToAction, 'children' | 'href' | 'icon' | 'labelDescription' | 'menuCategory'>
);

export type DropdownLinkFragment = (
  { __typename?: 'NavLink' }
  & Pick<NavLink, 'children'>
  & { dropdownLinksCollection?: Maybe<(
    { __typename?: 'NavLinkDropdownLinksCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )> }
);

export type LogoFragment = (
  { __typename?: 'Logo' }
  & Pick<Logo, 'name'>
  & { image?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type LogosCollectionFragment = (
  { __typename?: 'LogosCollection' }
  & Pick<LogosCollection, 'tagline'>
  & { logosCollection?: Maybe<(
    { __typename?: 'LogosCollectionLogosCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Logo' }
      & LogoFragment
    )>> }
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type MediaFragment = (
  { __typename?: 'Asset' }
  & Pick<Asset, 'title' | 'url' | 'description' | 'contentType' | 'width' | 'height'>
);

export type MetadataFragment = (
  { __typename?: 'Metadata' }
  & Pick<Metadata, 'title' | 'description' | 'url'>
  & { image?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type PersonFragment = (
  { __typename?: 'Person' }
  & Pick<Person, 'name' | 'position' | 'bio'>
  & { avatar?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, socialMedia?: Maybe<(
    { __typename?: 'SocialMedia' }
    & SocialMediaFragment
  )> }
);

export type PressPostFragment = (
  { __typename?: 'PressPost' }
  & Pick<PressPost, 'title' | 'date' | 'publicationName'>
  & { coverImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type QuoteFragment = (
  { __typename?: 'Quote2' }
  & Pick<Quote2, 'quote'>
  & { logo?: Maybe<(
    { __typename?: 'Logo' }
    & LogoFragment
  )>, person?: Maybe<(
    { __typename?: 'Person' }
    & PersonFragment
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type SectionBlockFragment = (
  { __typename?: 'SectionBlock' }
  & Pick<SectionBlock, 'title' | 'icon' | 'additionalTitle' | 'anchorLinkId'>
  & { subtitle?: Maybe<(
    { __typename?: 'SectionBlockSubtitle' }
    & Pick<SectionBlockSubtitle, 'json'>
  )>, actionsCollection?: Maybe<(
    { __typename?: 'SectionBlockActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, media?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, backgroundImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, customerProof?: Maybe<(
    { __typename: 'Person' }
    & PersonFragment
  ) | (
    { __typename: 'Quote2' }
    & QuoteFragment
  ) | (
    { __typename: 'Tweet' }
    & TweetFragment
  )> }
);

export type ListBlockFragment = (
  { __typename?: 'ListBlock' }
  & Pick<ListBlock, 'title' | 'icon' | 'listItems'>
  & { subtitle?: Maybe<(
    { __typename?: 'ListBlockSubtitle' }
    & Pick<ListBlockSubtitle, 'json'>
  )>, actionsCollection?: Maybe<(
    { __typename?: 'ListBlockActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, media?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type MediaBlockFragment = (
  { __typename?: 'MediaBlock' }
  & Pick<MediaBlock, 'title' | 'type'>
  & { description?: Maybe<(
    { __typename?: 'MediaBlockDescription' }
    & Pick<MediaBlockDescription, 'json'>
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )>, image?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type TweetFragment = (
  { __typename?: 'Tweet' }
  & Pick<Tweet, 'text' | 'userName' | 'userTag' | 'publicationDate'>
);

export type CustomerFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'name'>
  & { description?: Maybe<(
    { __typename?: 'CustomerDescription' }
    & Pick<CustomerDescription, 'json'>
  )>, actionsCollection?: Maybe<(
    { __typename?: 'CustomerActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, logo?: Maybe<(
    { __typename?: 'Logo' }
    & LogoFragment
  )> }
);

export type MarkdownBodyFragment = (
  { __typename?: 'MarkdownBody' }
  & Pick<MarkdownBody, 'body'>
);

export type UsageRateFragment = (
  { __typename?: 'UsageRate' }
  & Pick<UsageRate, 'label' | 'readOperationsMillion' | 'writeOperationsMillion' | 'transactionalComputeOperationsMillion' | 'storageGb'>
);

export type PricingPlanFragment = (
  { __typename?: 'PricingPlan' }
  & Pick<PricingPlan, 'name' | 'priceLabel' | 'isFeatured' | 'creditsPerMonth'>
  & { description?: Maybe<(
    { __typename?: 'PricingPlanDescription' }
    & Pick<PricingPlanDescription, 'json'>
  )>, listItemsCollection?: Maybe<(
    { __typename?: 'PricingPlanListItemsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'List' }
      & Pick<List, 'title' | 'items'>
    )>> }
  )>, action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )>, usageRate?: Maybe<(
    { __typename?: 'UsageRate' }
    & UsageRateFragment
  )> }
);

export type PricingPlanV2Fragment = (
  { __typename?: 'PricingPlanV2' }
  & Pick<PricingPlanV2, 'name' | 'planDescription' | 'priceLabel' | 'annualPriceLabel' | 'body' | 'annualBody' | 'isFeatured' | 'creditsPerMonth'>
  & { action?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )>, usageRate?: Maybe<(
    { __typename?: 'UsageRate' }
    & UsageRateFragment
  )>, usageRatesCollection?: Maybe<(
    { __typename?: 'PricingPlanV2UsageRatesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'UsageRate' }
      & UsageRateFragment
    )>> }
  )> }
);

export type ColumnFragment = (
  { __typename?: 'Column' }
  & Pick<Column, 'head' | 'widthPercentage'>
  & { rowsCollection?: Maybe<(
    { __typename?: 'ColumnRowsCollection' }
    & { items: Array<Maybe<(
      { __typename: 'Description' }
      & { text?: Maybe<(
        { __typename?: 'DescriptionText' }
        & Pick<DescriptionText, 'json'>
      )> }
    ) | (
      { __typename: 'DescriptionMarkdown' }
      & Pick<DescriptionMarkdown, 'description'>
    )>> }
  )> }
);

export type SectionFragment = (
  { __typename?: 'Section' }
  & Pick<Section, 'type' | 'title' | 'additionalTitle' | 'anchorLinkId' | 'markdownBody' | 'hasLinearBackground' | 'textBelowSection' | 'compactMode'>
  & { subtitle?: Maybe<(
    { __typename?: 'SectionSubtitle' }
    & Pick<SectionSubtitle, 'json'>
  )>, image?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, actionsCollection?: Maybe<(
    { __typename?: 'SectionActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, blocksCollection?: Maybe<(
    { __typename?: 'SectionBlocksCollection' }
    & { items: Array<Maybe<(
      { __typename: 'BlogPost' }
      & BlogPostNoCategoryMetaFragment
    ) | (
      { __typename: 'CallToAction' }
      & LinkFragment
    ) | (
      { __typename: 'Column' }
      & ColumnFragment
    ) | (
      { __typename: 'Customer' }
      & CustomerFragment
    ) | { __typename: 'Event' } | { __typename: 'Form' } | (
      { __typename: 'ListBlock' }
      & ListBlockFragment
    ) | (
      { __typename: 'MarkdownBody' }
      & MarkdownBodyFragment
    ) | (
      { __typename: 'MediaBlock' }
      & MediaBlockFragment
    ) | { __typename: 'PartnersCard' } | (
      { __typename: 'Person' }
      & PersonFragment
    ) | (
      { __typename: 'PricingPlan' }
      & PricingPlanFragment
    ) | (
      { __typename: 'PricingPlanV2' }
      & PricingPlanV2Fragment
    ) | (
      { __typename: 'Quote2' }
      & QuoteFragment
    ) | (
      { __typename: 'SectionBlock' }
      & SectionBlockFragment
    ) | (
      { __typename: 'Tweet' }
      & TweetFragment
    )>> }
  )>, logosCollection?: Maybe<(
    { __typename?: 'LogosCollection' }
    & LogosCollectionFragment
  )>, backgroundImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type SocialMediaFragment = (
  { __typename?: 'SocialMedia' }
  & Pick<SocialMedia, 'for' | 'twitter' | 'linkedIn' | 'facebook' | 'gitHub' | 'devTo' | 'youTube'>
);

export type TopNotificationFragment = (
  { __typename?: 'TopNotification' }
  & Pick<TopNotification, 'title'>
  & { link?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type BlogPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type BlogPageQuery = (
  { __typename?: 'Query' }
  & { blogCollection?: Maybe<(
    { __typename?: 'BlogCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Blog' }
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, featuredPost?: Maybe<(
        { __typename?: 'BlogPost' }
        & BlogPostMetaFragment
      )>, featuredPostImage?: Maybe<(
        { __typename?: 'Asset' }
        & MediaFragment
      )>, heroCardBlock?: Maybe<(
        { __typename?: 'SectionBlock' }
        & SectionBlockFragment
      )>, newsletterCardBlock?: Maybe<(
        { __typename?: 'SectionBlock' }
        & SectionBlockFragment
      )> }
    )>> }
  )>, blogPostCollection?: Maybe<(
    { __typename?: 'BlogPostCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogPost' }
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
      & BlogPostMetaFragment
    )>> }
  )> }
);

export type BlogPostsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsSlugsQuery = (
  { __typename?: 'Query' }
  & { blogPostCollection?: Maybe<(
    { __typename?: 'BlogPostCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogPost' }
      & Pick<BlogPost, 'slug' | 'additionalSlugs'>
    )>> }
  )> }
);

export type BlogPostQueryVariables = Exact<{
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type BlogPostQuery = (
  { __typename?: 'Query' }
  & { blogPostCollection?: Maybe<(
    { __typename?: 'BlogPostCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogPost' }
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'publishedAt'>
      ) }
      & BlogPostFragment
    )>> }
  )> }
);

export type CareersPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type CareersPageQuery = (
  { __typename?: 'Query' }
  & { pageCareersCollection?: Maybe<(
    { __typename?: 'PageCareersCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageCareers' }
      & Pick<PageCareers, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'PageCareersHeroSubtitle' }
        & Pick<PageCareersHeroSubtitle, 'json'>
      )>, heroActionsCollection?: Maybe<(
        { __typename?: 'PageCareersHeroActionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'CallToAction' }
          & LinkFragment
        )>> }
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PageCareersSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type ClientServerlessPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type ClientServerlessPageQuery = (
  { __typename?: 'Query' }
  & { pageClientServerlessCollection?: Maybe<(
    { __typename?: 'PageClientServerlessCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageClientServerless' }
      & Pick<PageClientServerless, 'title' | 'body'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PageClientServerlessSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type CommunityPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type CommunityPageQuery = (
  { __typename?: 'Query' }
  & { communityCollection?: Maybe<(
    { __typename?: 'CommunityCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Community' }
      & Pick<Community, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'CommunityHeroSubtitle' }
        & Pick<CommunityHeroSubtitle, 'json'>
      )>, heroActionsCollection?: Maybe<(
        { __typename?: 'CommunityHeroActionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'CallToAction' }
          & LinkFragment
        )>> }
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'CommunitySectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type CustomersPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type CustomersPageQuery = (
  { __typename?: 'Query' }
  & { pageCustomersCollection?: Maybe<(
    { __typename?: 'PageCustomersCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageCustomers' }
      & Pick<PageCustomers, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'PageCustomersHeroSubtitle' }
        & Pick<PageCustomersHeroSubtitle, 'json'>
      )>, heroActionsCollection?: Maybe<(
        { __typename?: 'PageCustomersHeroActionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'CallToAction' }
          & LinkFragment
        )>> }
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PageCustomersSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type EventsPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type EventsPageQuery = (
  { __typename?: 'Query' }
  & { pageEventsCollection?: Maybe<(
    { __typename?: 'PageEventsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageEvents' }
      & Pick<PageEvents, 'heroTitle'>
      & { heroSubtitle?: Maybe<(
        { __typename?: 'PageEventsHeroSubtitle' }
        & Pick<PageEventsHeroSubtitle, 'json'>
      )>, metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PageEventsSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )>, eventCollection?: Maybe<(
    { __typename?: 'EventCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Event' }
      & EventFragment
    )>> }
  )> }
);

export type EventFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'eventTitle' | 'eventStartDate' | 'eventEndDate' | 'eventUrl' | 'eventLocation'>
  & { eventDescription?: Maybe<(
    { __typename?: 'EventEventDescription' }
    & Pick<EventEventDescription, 'json'>
  )>, featuredImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type FeaturesPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type FeaturesPageQuery = (
  { __typename?: 'Query' }
  & { featuresCollection?: Maybe<(
    { __typename?: 'FeaturesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Features' }
      & Pick<Features, 'heroTitle' | 'subId'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'FeaturesHeroSubtitle' }
        & Pick<FeaturesHeroSubtitle, 'json'>
      )>, heroImage?: Maybe<(
        { __typename?: 'Asset' }
        & MediaFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'FeaturesSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type GeneralDataFragment = (
  { __typename?: 'GeneralData' }
  & Pick<GeneralData, 'copyrightMessage' | 'pricingPageTotalLabel' | 'blogSignUpCardText' | 'blogReqADemoCardText' | 'sufhCookieDomain' | 'sufhApiUrl' | 'sufhDashboardUrl' | 'sufhCaptchaKey'>
  & { logo?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, logoInPng?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, favicon?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, faviconDarkMode?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, defaultMetadata?: Maybe<(
    { __typename?: 'Metadata' }
    & MetadataFragment
  )>, navCenterLinksCollection?: Maybe<(
    { __typename?: 'GeneralDataNavCenterLinksCollection' }
    & { items: Array<Maybe<(
      { __typename: 'CallToAction' }
      & LinkFragment
    ) | (
      { __typename: 'NavLink' }
      & DropdownLinkFragment
    )>> }
  )>, navRightLinksCollection?: Maybe<(
    { __typename?: 'GeneralDataNavRightLinksCollection' }
    & { items: Array<Maybe<(
      { __typename: 'CallToAction' }
      & LinkFragment
    ) | (
      { __typename: 'NavLink' }
      & DropdownLinkFragment
    )>> }
  )>, footerLinksListsCollection?: Maybe<(
    { __typename?: 'GeneralDataFooterLinksListsCollection' }
    & { items: Array<Maybe<(
      { __typename: 'NavLink' }
      & DropdownLinkFragment
    )>> }
  )>, topNotification?: Maybe<(
    { __typename?: 'TopNotification' }
    & TopNotificationFragment
  )>, socialMedia?: Maybe<(
    { __typename?: 'SocialMedia' }
    & SocialMediaFragment
  )>, statusLink?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )>, footerRightSideLinksCollection?: Maybe<(
    { __typename?: 'GeneralDataFooterRightSideLinksCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, blogPostFooterText?: Maybe<(
    { __typename?: 'GeneralDataBlogPostFooterText' }
    & Pick<GeneralDataBlogPostFooterText, 'json'>
  )>, blogPostNewsletterBlock?: Maybe<(
    { __typename?: 'SectionBlock' }
    & SectionBlockFragment
  )>, navMenuLinksCollection?: Maybe<(
    { __typename?: 'GeneralDataNavMenuLinksCollection' }
    & { items: Array<Maybe<(
      { __typename: 'CallToAction' }
      & LinkFragment
    ) | (
      { __typename: 'NavLink' }
      & DropdownLinkFragment
    )>> }
  )>, blogSignUpCardImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, blogSignUpCardLink?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )>, blogReqADemoCardImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )>, blogReqADemoCardLink?: Maybe<(
    { __typename?: 'CallToAction' }
    & LinkFragment
  )> }
);

export type GeneralDataQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type GeneralDataQuery = (
  { __typename?: 'Query' }
  & { generalDataCollection?: Maybe<(
    { __typename?: 'GeneralDataCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'GeneralData' }
      & GeneralDataFragment
    )>> }
  )> }
);

export type HomePageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type HomePageQuery = (
  { __typename?: 'Query' }
  & { homeCollection?: Maybe<(
    { __typename?: 'HomeCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Home' }
      & Pick<Home, 'useBuilder' | 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'HomeHeroSubtitle' }
        & Pick<HomeHeroSubtitle, 'json'>
      )>, heroActionsCollection?: Maybe<(
        { __typename?: 'HomeHeroActionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'CallToAction' }
          & LinkFragment
        )>> }
      )>, companies?: Maybe<(
        { __typename?: 'LogosCollection' }
        & LogosCollectionFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'HomeSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )>, heroImage?: Maybe<(
        { __typename?: 'Asset' }
        & MediaFragment
      )> }
    )>> }
  )> }
);

export type PartnersPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type PartnersPageQuery = (
  { __typename?: 'Query' }
  & { pagePartnersCollection?: Maybe<(
    { __typename?: 'PagePartnersCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PagePartners' }
      & Pick<PagePartners, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'PagePartnersHeroSubtitle' }
        & Pick<PagePartnersHeroSubtitle, 'json'>
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PagePartnersSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type PlatformPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type PlatformPageQuery = (
  { __typename?: 'Query' }
  & { featuresCollection?: Maybe<(
    { __typename?: 'FeaturesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Features' }
      & Pick<Features, 'heroTitle' | 'subId'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'FeaturesHeroSubtitle' }
        & Pick<FeaturesHeroSubtitle, 'json'>
      )>, heroImage?: Maybe<(
        { __typename?: 'Asset' }
        & MediaFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'FeaturesSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type PressPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type PressPageQuery = (
  { __typename?: 'Query' }
  & { pagePressCollection?: Maybe<(
    { __typename?: 'PagePressCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PagePress' }
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, featuredPost?: Maybe<(
        { __typename?: 'PressPost' }
        & PressPostFragment
      )>, pressKitBlock?: Maybe<(
        { __typename?: 'SectionBlock' }
        & SectionBlockFragment
      )> }
    )>> }
  )>, pressPostCollection?: Maybe<(
    { __typename?: 'PressPostCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PressPost' }
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
      & PressPostFragment
    )>> }
  )> }
);

export type PricingPageFragment = (
  { __typename?: 'PagePricing' }
  & Pick<PagePricing, 'heroTitle' | 'comingSoonText' | 'noIndex'>
  & { sys: (
    { __typename?: 'Sys' }
    & Pick<Sys, 'id'>
  ), metadata?: Maybe<(
    { __typename?: 'Metadata' }
    & MetadataFragment
  )>, heroSubtitle?: Maybe<(
    { __typename?: 'PagePricingHeroSubtitle' }
    & Pick<PagePricingHeroSubtitle, 'json'>
  )>, heroBlocksCollection?: Maybe<(
    { __typename?: 'PagePricingHeroBlocksCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'SectionBlock' }
      & SectionBlockFragment
    )>> }
  )>, heroActionsCollection?: Maybe<(
    { __typename?: 'PagePricingHeroActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, sectionsCollection?: Maybe<(
    { __typename?: 'PagePricingSectionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Section' }
      & SectionFragment
    )>> }
  )> }
);

export type PricingPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type PricingPageQuery = (
  { __typename?: 'Query' }
  & { pagePricingCollection?: Maybe<(
    { __typename?: 'PagePricingCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PagePricing' }
      & PricingPageFragment
    )>> }
  )> }
);

export type PricingPageByIdQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
}>;


export type PricingPageByIdQuery = (
  { __typename?: 'Query' }
  & { pagePricing?: Maybe<(
    { __typename?: 'PagePricing' }
    & PricingPageFragment
  )> }
);

export type RedirectFragment = (
  { __typename?: 'Redirect' }
  & Pick<Redirect, 'source' | 'destination' | 'permanent'>
);

export type RedirectsQueryVariables = Exact<{ [key: string]: never; }>;


export type RedirectsQuery = (
  { __typename?: 'Query' }
  & { redirectsCollection?: Maybe<(
    { __typename?: 'RedirectsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Redirects' }
      & { redirectsCollection?: Maybe<(
        { __typename?: 'RedirectsRedirectsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Redirect' }
          & RedirectFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type ResourcesPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type ResourcesPageQuery = (
  { __typename?: 'Query' }
  & { learnCollection?: Maybe<(
    { __typename?: 'LearnCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Learn' }
      & Pick<Learn, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'LearnHeroSubtitle' }
        & Pick<LearnHeroSubtitle, 'json'>
      )>, heroActionsCollection?: Maybe<(
        { __typename?: 'LearnHeroActionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'CallToAction' }
          & LinkFragment
        )>> }
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'LearnSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type SitemapQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type SitemapQuery = (
  { __typename?: 'Query' }
  & { pageSitemapCollection?: Maybe<(
    { __typename?: 'PageSitemapCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageSitemap' }
      & Pick<PageSitemap, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'PageSitemapHeroSubtitle' }
        & Pick<PageSitemapHeroSubtitle, 'json'>
      )> }
    )>> }
  )>, blogCollection?: Maybe<(
    { __typename?: 'BlogCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Blog' }
      & Pick<Blog, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, blogPostCollection?: Maybe<(
    { __typename?: 'BlogPostCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'BlogPost' }
      & Pick<BlogPost, 'date' | 'slug' | 'title'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ), metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pageTemplateCollection?: Maybe<(
    { __typename?: 'PageTemplateCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTemplate' }
      & Pick<PageTemplate, 'darkBackground' | 'slug' | 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, companyCollection?: Maybe<(
    { __typename?: 'CompanyCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, learnCollection?: Maybe<(
    { __typename?: 'LearnCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Learn' }
      & Pick<Learn, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pagePricingCollection?: Maybe<(
    { __typename?: 'PagePricingCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PagePricing' }
      & Pick<PagePricing, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pagePressCollection?: Maybe<(
    { __typename?: 'PagePressCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PagePress' }
      & Pick<PagePress, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, homeCollection?: Maybe<(
    { __typename?: 'HomeCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Home' }
      & Pick<Home, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, featuresCollection?: Maybe<(
    { __typename?: 'FeaturesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Features' }
      & Pick<Features, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pageCustomersCollection?: Maybe<(
    { __typename?: 'PageCustomersCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageCustomers' }
      & Pick<PageCustomers, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, communityCollection?: Maybe<(
    { __typename?: 'CommunityCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Community' }
      & Pick<Community, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pageCareersCollection?: Maybe<(
    { __typename?: 'PageCareersCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageCareers' }
      & Pick<PageCareers, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pageTrustCollection?: Maybe<(
    { __typename?: 'PageTrustCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTrust' }
      & Pick<PageTrust, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, pageClientServerlessCollection?: Maybe<(
    { __typename?: 'PageClientServerlessCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageClientServerless' }
      & Pick<PageClientServerless, 'hideFromSitemap'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )> }
    )>> }
  )>, generalDataCollection?: Maybe<(
    { __typename?: 'GeneralDataCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'GeneralData' }
      & GeneralDataFragment
    )>> }
  )> }
);

export type SolutionsPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type SolutionsPageQuery = (
  { __typename?: 'Query' }
  & { featuresCollection?: Maybe<(
    { __typename?: 'FeaturesCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Features' }
      & Pick<Features, 'heroTitle' | 'subId'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'FeaturesHeroSubtitle' }
        & Pick<FeaturesHeroSubtitle, 'json'>
      )>, heroImage?: Maybe<(
        { __typename?: 'Asset' }
        & MediaFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'FeaturesSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type TeamPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type TeamPageQuery = (
  { __typename?: 'Query' }
  & { companyCollection?: Maybe<(
    { __typename?: 'CompanyCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, heroSubtitle?: Maybe<(
        { __typename?: 'CompanyHeroSubtitle' }
        & Pick<CompanyHeroSubtitle, 'json'>
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'CompanySectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export type TemplatePageFragment = (
  { __typename?: 'PageTemplate' }
  & Pick<PageTemplate, 'slug' | 'noIndex' | 'heroTitle' | 'darkBackground' | 'linesInHero' | 'hideFromSitemap' | 'heroImageStacked' | 'heroSignUpForm'>
  & { metadata?: Maybe<(
    { __typename?: 'Metadata' }
    & MetadataFragment
  )>, heroSubtitle?: Maybe<(
    { __typename?: 'PageTemplateHeroSubtitle' }
    & Pick<PageTemplateHeroSubtitle, 'json'>
  )>, heroActionsCollection?: Maybe<(
    { __typename?: 'PageTemplateHeroActionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'CallToAction' }
      & LinkFragment
    )>> }
  )>, heroSlider?: Maybe<(
    { __typename?: 'LogosCollection' }
    & LogosCollectionFragment
  )>, sectionsCollection?: Maybe<(
    { __typename?: 'PageTemplateSectionsCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Section' }
      & SectionFragment
    )>> }
  )>, heroImage?: Maybe<(
    { __typename?: 'Asset' }
    & MediaFragment
  )> }
);

export type TemplatePagesQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type TemplatePagesQuery = (
  { __typename?: 'Query' }
  & { pageTemplateCollection?: Maybe<(
    { __typename?: 'PageTemplateCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTemplate' }
      & TemplatePageFragment
    )>> }
  )> }
);

export type TemplatePagesForPathsQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type TemplatePagesForPathsQuery = (
  { __typename?: 'Query' }
  & { pageTemplateCollection?: Maybe<(
    { __typename?: 'PageTemplateCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTemplate' }
      & Pick<PageTemplate, 'slug'>
    )>> }
  )> }
);

export type SingleTemplatePageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
}>;


export type SingleTemplatePageQuery = (
  { __typename?: 'Query' }
  & { pageTemplateCollection?: Maybe<(
    { __typename?: 'PageTemplateCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTemplate' }
      & TemplatePageFragment
    )>> }
  )> }
);

export type TrustPageQueryVariables = Exact<{
  preview?: Maybe<Scalars['Boolean']>;
}>;


export type TrustPageQuery = (
  { __typename?: 'Query' }
  & { pageTrustCollection?: Maybe<(
    { __typename?: 'PageTrustCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'PageTrust' }
      & Pick<PageTrust, 'heroTitle'>
      & { metadata?: Maybe<(
        { __typename?: 'Metadata' }
        & MetadataFragment
      )>, sectionsCollection?: Maybe<(
        { __typename?: 'PageTrustSectionsCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Section' }
          & SectionFragment
        )>> }
      )> }
    )>> }
  )> }
);

export const MediaFragmentDoc = gql`
    fragment Media on Asset {
  title
  url
  description
  contentType
  width
  height
}
    `;
export const SocialMediaFragmentDoc = gql`
    fragment SocialMedia on SocialMedia {
  for
  twitter
  linkedIn
  facebook
  gitHub
  devTo
  youTube
}
    `;
export const PersonFragmentDoc = gql`
    fragment Person on Person {
  name
  position
  bio
  avatar {
    ...Media
  }
  socialMedia {
    ...SocialMedia
  }
}
    ${MediaFragmentDoc}
${SocialMediaFragmentDoc}`;
export const BlogPostNoCategoryMetaFragmentDoc = gql`
    fragment BlogPostNoCategoryMeta on BlogPost {
  title
  slug
  additionalSlugs
  date
  excerpt
  isCommunityPost
  coverImage {
    ...Media
  }
  thumbnailImage {
    ...Media
  }
  authorsCollection(limit: 3) {
    items {
      ...Person
    }
  }
  lastUpdated
  hideFromRelatedPosts
  canonicalLink
}
    ${MediaFragmentDoc}
${PersonFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on BlogCategory {
  title
  slug
}
    `;
export const BlogPostMetaFragmentDoc = gql`
    fragment BlogPostMeta on BlogPost {
  ...BlogPostNoCategoryMeta
  categoriesCollection(limit: 6) {
    items {
      ...Category
    }
  }
}
    ${BlogPostNoCategoryMetaFragmentDoc}
${CategoryFragmentDoc}`;
export const MetadataFragmentDoc = gql`
    fragment Metadata on Metadata {
  title
  description
  image {
    ...Media
  }
  url
}
    ${MediaFragmentDoc}`;
export const RelatedPostFragmentDoc = gql`
    fragment RelatedPost on BlogPost {
  title
  slug
}
    `;
export const BlogPostFragmentDoc = gql`
    fragment BlogPost on BlogPost {
  ...BlogPostMeta
  metadata {
    ...Metadata
  }
  body
  body2
  relatedPostsCollection(limit: 3) {
    items {
      ...RelatedPost
    }
  }
}
    ${BlogPostMetaFragmentDoc}
${MetadataFragmentDoc}
${RelatedPostFragmentDoc}`;
export const LinkFragmentDoc = gql`
    fragment Link on CallToAction {
  children
  href
  icon
  labelDescription
  menuCategory
}
    `;
export const PressPostFragmentDoc = gql`
    fragment PressPost on PressPost {
  title
  date
  coverImage {
    ...Media
  }
  action {
    ...Link
  }
  publicationName
}
    ${MediaFragmentDoc}
${LinkFragmentDoc}`;
export const EventFragmentDoc = gql`
    fragment Event on Event {
  eventTitle
  eventDescription {
    json
  }
  featuredImage {
    ...Media
  }
  eventStartDate
  eventEndDate
  eventUrl
  eventLocation
}
    ${MediaFragmentDoc}`;
export const DropdownLinkFragmentDoc = gql`
    fragment DropdownLink on NavLink {
  children
  dropdownLinksCollection(limit: 25) {
    items {
      ...Link
    }
  }
}
    ${LinkFragmentDoc}`;
export const TopNotificationFragmentDoc = gql`
    fragment TopNotification on TopNotification {
  title
  link {
    ...Link
  }
}
    ${LinkFragmentDoc}`;
export const TweetFragmentDoc = gql`
    fragment Tweet on Tweet {
  text
  userName
  userTag
  publicationDate
}
    `;
export const LogoFragmentDoc = gql`
    fragment Logo on Logo {
  name
  image {
    ...Media
  }
  action {
    ...Link
  }
}
    ${MediaFragmentDoc}
${LinkFragmentDoc}`;
export const QuoteFragmentDoc = gql`
    fragment Quote on Quote2 {
  quote
  logo {
    ...Logo
  }
  person {
    ...Person
  }
  action {
    ...Link
  }
}
    ${LogoFragmentDoc}
${PersonFragmentDoc}
${LinkFragmentDoc}`;
export const SectionBlockFragmentDoc = gql`
    fragment SectionBlock on SectionBlock {
  title
  subtitle {
    json
  }
  actionsCollection(limit: 2) {
    items {
      ...Link
    }
  }
  media {
    ...Media
  }
  icon
  backgroundImage {
    ...Media
  }
  additionalTitle
  anchorLinkId
  customerProof {
    __typename
    ...Tweet
    ...Person
    ...Quote
  }
}
    ${LinkFragmentDoc}
${MediaFragmentDoc}
${TweetFragmentDoc}
${PersonFragmentDoc}
${QuoteFragmentDoc}`;
export const GeneralDataFragmentDoc = gql`
    fragment GeneralData on GeneralData {
  logo {
    ...Media
  }
  logoInPng {
    ...Media
  }
  favicon {
    ...Media
  }
  faviconDarkMode {
    ...Media
  }
  defaultMetadata {
    ...Metadata
  }
  navCenterLinksCollection(limit: 6) {
    items {
      __typename
      ...Link
      ...DropdownLink
    }
  }
  navRightLinksCollection(limit: 3) {
    items {
      __typename
      ...Link
      ...DropdownLink
    }
  }
  footerLinksListsCollection(limit: 4) {
    items {
      __typename
      ...DropdownLink
    }
  }
  topNotification {
    ...TopNotification
  }
  socialMedia {
    ...SocialMedia
  }
  copyrightMessage
  statusLink {
    ...Link
  }
  footerRightSideLinksCollection {
    items {
      ...Link
    }
  }
  blogPostFooterText {
    json
  }
  blogPostNewsletterBlock {
    ...SectionBlock
  }
  pricingPageTotalLabel
  navMenuLinksCollection {
    items {
      __typename
      ...Link
      ...DropdownLink
    }
  }
  blogSignUpCardText
  blogSignUpCardImage {
    ...Media
  }
  blogSignUpCardLink {
    ...Link
  }
  blogReqADemoCardText
  blogReqADemoCardImage {
    ...Media
  }
  blogReqADemoCardLink {
    ...Link
  }
  sufhCookieDomain
  sufhApiUrl
  sufhDashboardUrl
  sufhCaptchaKey
}
    ${MediaFragmentDoc}
${MetadataFragmentDoc}
${LinkFragmentDoc}
${DropdownLinkFragmentDoc}
${TopNotificationFragmentDoc}
${SocialMediaFragmentDoc}
${SectionBlockFragmentDoc}`;
export const ListBlockFragmentDoc = gql`
    fragment ListBlock on ListBlock {
  title
  subtitle {
    json
  }
  actionsCollection(limit: 2) {
    items {
      ...Link
    }
  }
  media {
    ...Media
  }
  icon
  listItems
}
    ${LinkFragmentDoc}
${MediaFragmentDoc}`;
export const MediaBlockFragmentDoc = gql`
    fragment MediaBlock on MediaBlock {
  title
  description {
    json
  }
  action {
    ...Link
  }
  image {
    ...Media
  }
  type
}
    ${LinkFragmentDoc}
${MediaFragmentDoc}`;
export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  name
  description {
    json
  }
  actionsCollection(limit: 2) {
    items {
      ...Link
    }
  }
  logo {
    ...Logo
  }
}
    ${LinkFragmentDoc}
${LogoFragmentDoc}`;
export const MarkdownBodyFragmentDoc = gql`
    fragment MarkdownBody on MarkdownBody {
  body
}
    `;
export const UsageRateFragmentDoc = gql`
    fragment UsageRate on UsageRate {
  label
  readOperationsMillion
  writeOperationsMillion
  transactionalComputeOperationsMillion
  storageGb
}
    `;
export const PricingPlanFragmentDoc = gql`
    fragment PricingPlan on PricingPlan {
  name
  description {
    json
  }
  priceLabel
  listItemsCollection(limit: 6) {
    items {
      title
      items
    }
  }
  isFeatured
  action {
    ...Link
  }
  creditsPerMonth
  usageRate {
    ...UsageRate
  }
}
    ${LinkFragmentDoc}
${UsageRateFragmentDoc}`;
export const PricingPlanV2FragmentDoc = gql`
    fragment PricingPlanV2 on PricingPlanV2 {
  name
  planDescription
  priceLabel
  annualPriceLabel
  body
  annualBody
  isFeatured
  action {
    ...Link
  }
  creditsPerMonth
  usageRate {
    ...UsageRate
  }
  usageRatesCollection(limit: 6) {
    items {
      ...UsageRate
    }
  }
}
    ${LinkFragmentDoc}
${UsageRateFragmentDoc}`;
export const ColumnFragmentDoc = gql`
    fragment Column on Column {
  head
  widthPercentage
  rowsCollection(limit: 20) {
    items {
      __typename
      ... on Description {
        text {
          json
        }
      }
      ... on DescriptionMarkdown {
        description
      }
    }
  }
}
    `;
export const LogosCollectionFragmentDoc = gql`
    fragment LogosCollection on LogosCollection {
  tagline
  logosCollection(limit: 12) {
    items {
      ...Logo
    }
  }
  action {
    ...Link
  }
}
    ${LogoFragmentDoc}
${LinkFragmentDoc}`;
export const SectionFragmentDoc = gql`
    fragment Section on Section {
  type
  title
  additionalTitle
  anchorLinkId
  subtitle {
    json
  }
  image {
    ...Media
  }
  actionsCollection(limit: 3) {
    items {
      ...Link
    }
  }
  blocksCollection(limit: 20) {
    items {
      __typename
      ...SectionBlock
      ...Quote
      ...BlogPostNoCategoryMeta
      ...ListBlock
      ...Person
      ...MediaBlock
      ...Tweet
      ...Customer
      ...MarkdownBody
      ...PricingPlan
      ...PricingPlanV2
      ...Column
      ...Link
    }
  }
  logosCollection {
    ...LogosCollection
  }
  markdownBody
  hasLinearBackground
  textBelowSection
  backgroundImage {
    ...Media
  }
  compactMode
}
    ${MediaFragmentDoc}
${LinkFragmentDoc}
${SectionBlockFragmentDoc}
${QuoteFragmentDoc}
${BlogPostNoCategoryMetaFragmentDoc}
${ListBlockFragmentDoc}
${PersonFragmentDoc}
${MediaBlockFragmentDoc}
${TweetFragmentDoc}
${CustomerFragmentDoc}
${MarkdownBodyFragmentDoc}
${PricingPlanFragmentDoc}
${PricingPlanV2FragmentDoc}
${ColumnFragmentDoc}
${LogosCollectionFragmentDoc}`;
export const PricingPageFragmentDoc = gql`
    fragment PricingPage on PagePricing {
  sys {
    id
  }
  metadata {
    ...Metadata
  }
  heroTitle
  heroSubtitle {
    json
  }
  heroBlocksCollection(limit: 3) {
    items {
      ...SectionBlock
    }
  }
  heroActionsCollection(limit: 2) {
    items {
      ...Link
    }
  }
  sectionsCollection(limit: 10) {
    items {
      ...Section
    }
  }
  comingSoonText
  noIndex
}
    ${MetadataFragmentDoc}
${SectionBlockFragmentDoc}
${LinkFragmentDoc}
${SectionFragmentDoc}`;
export const RedirectFragmentDoc = gql`
    fragment Redirect on Redirect {
  source
  destination
  permanent
}
    `;
export const TemplatePageFragmentDoc = gql`
    fragment TemplatePage on PageTemplate {
  slug
  noIndex
  metadata {
    ...Metadata
  }
  heroTitle
  darkBackground
  heroSubtitle {
    json
  }
  heroActionsCollection(limit: 2) {
    items {
      ...Link
    }
  }
  heroSlider {
    ...LogosCollection
  }
  linesInHero
  sectionsCollection(limit: 10) {
    items {
      ...Section
    }
  }
  hideFromSitemap
  heroImage {
    ...Media
  }
  heroImageStacked
  heroSignUpForm
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${LogosCollectionFragmentDoc}
${SectionFragmentDoc}
${MediaFragmentDoc}`;
export const BlogPageDocument = gql`
    query BlogPage($preview: Boolean) {
  blogCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      featuredPost {
        ...BlogPostMeta
      }
      featuredPostImage {
        ...Media
      }
      heroCardBlock {
        ...SectionBlock
      }
      newsletterCardBlock {
        ...SectionBlock
      }
    }
  }
  blogPostCollection(limit: 500, preview: $preview) {
    items {
      sys {
        id
      }
      ...BlogPostMeta
    }
  }
}
    ${MetadataFragmentDoc}
${BlogPostMetaFragmentDoc}
${MediaFragmentDoc}
${SectionBlockFragmentDoc}`;
export const BlogPostsSlugsDocument = gql`
    query BlogPostsSlugs {
  blogPostCollection(limit: 400) {
    items {
      slug
      additionalSlugs
    }
  }
}
    `;
export const BlogPostDocument = gql`
    query BlogPost($slug: String!, $preview: Boolean) {
  blogPostCollection(where: {OR: [{slug: $slug}, {additionalSlugs_contains_some: [$slug]}]}, limit: 1, preview: $preview) {
    items {
      ...BlogPost
      sys {
        publishedAt
      }
    }
  }
}
    ${BlogPostFragmentDoc}`;
export const CareersPageDocument = gql`
    query CareersPage($preview: Boolean) {
  pageCareersCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroActionsCollection(limit: 2) {
        items {
          ...Link
        }
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${SectionFragmentDoc}`;
export const ClientServerlessPageDocument = gql`
    query ClientServerlessPage($preview: Boolean) {
  pageClientServerlessCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      title
      body
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionFragmentDoc}`;
export const CommunityPageDocument = gql`
    query CommunityPage($preview: Boolean) {
  communityCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroActionsCollection(limit: 2) {
        items {
          ...Link
        }
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${SectionFragmentDoc}`;
export const CustomersPageDocument = gql`
    query CustomersPage($preview: Boolean) {
  pageCustomersCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroActionsCollection(limit: 2) {
        items {
          ...Link
        }
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${SectionFragmentDoc}`;
export const EventsPageDocument = gql`
    query EventsPage($preview: Boolean) {
  pageEventsCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      heroTitle
      heroSubtitle {
        json
      }
      metadata {
        ...Metadata
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
  eventCollection(order: eventStartDate_ASC, preview: $preview) {
    items {
      ...Event
    }
  }
}
    ${MetadataFragmentDoc}
${SectionFragmentDoc}
${EventFragmentDoc}`;
export const FeaturesPageDocument = gql`
    query FeaturesPage($preview: Boolean) {
  featuresCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview, where: {subId: "features"}) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroImage {
        ...Media
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
      subId
    }
  }
}
    ${MetadataFragmentDoc}
${MediaFragmentDoc}
${SectionFragmentDoc}`;
export const GeneralDataDocument = gql`
    query GeneralData($preview: Boolean) {
  generalDataCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      ...GeneralData
    }
  }
}
    ${GeneralDataFragmentDoc}`;
export const HomePageDocument = gql`
    query HomePage($preview: Boolean) {
  homeCollection(limit: 2, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      useBuilder
      heroTitle
      heroSubtitle {
        json
      }
      heroActionsCollection(limit: 2) {
        items {
          ...Link
        }
      }
      companies {
        ...LogosCollection
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
      heroImage {
        ...Media
      }
    }
  }
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${LogosCollectionFragmentDoc}
${SectionFragmentDoc}
${MediaFragmentDoc}`;
export const PartnersPageDocument = gql`
    query PartnersPage($preview: Boolean) {
  pagePartnersCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionFragmentDoc}`;
export const PlatformPageDocument = gql`
    query PlatformPage($preview: Boolean) {
  featuresCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview, where: {subId: "platform"}) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroImage {
        ...Media
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
      subId
    }
  }
}
    ${MetadataFragmentDoc}
${MediaFragmentDoc}
${SectionFragmentDoc}`;
export const PressPageDocument = gql`
    query PressPage($preview: Boolean) {
  pagePressCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      featuredPost {
        ...PressPost
      }
      pressKitBlock {
        ...SectionBlock
      }
    }
  }
  pressPostCollection(limit: 500) {
    items {
      sys {
        id
      }
      ...PressPost
    }
  }
}
    ${MetadataFragmentDoc}
${PressPostFragmentDoc}
${SectionBlockFragmentDoc}`;
export const PricingPageDocument = gql`
    query PricingPage($preview: Boolean) {
  pagePricingCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      ...PricingPage
    }
  }
}
    ${PricingPageFragmentDoc}`;
export const PricingPageByIdDocument = gql`
    query PricingPageByID($preview: Boolean, $id: String!) {
  pagePricing(id: $id, preview: $preview) {
    ...PricingPage
  }
}
    ${PricingPageFragmentDoc}`;
export const RedirectsDocument = gql`
    query Redirects {
  redirectsCollection(limit: 1, order: sys_firstPublishedAt_DESC) {
    items {
      redirectsCollection(limit: 1000) {
        items {
          ...Redirect
        }
      }
    }
  }
}
    ${RedirectFragmentDoc}`;
export const ResourcesPageDocument = gql`
    query ResourcesPage($preview: Boolean) {
  learnCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroActionsCollection(limit: 2) {
        items {
          ...Link
        }
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${LinkFragmentDoc}
${SectionFragmentDoc}`;
export const SitemapDocument = gql`
    query Sitemap($preview: Boolean) {
  pageSitemapCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
    }
  }
  blogCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  blogPostCollection(limit: 500, preview: $preview) {
    items {
      sys {
        id
      }
      metadata {
        ...Metadata
      }
      date
      slug
      title
    }
  }
  pageTemplateCollection(limit: 6, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      darkBackground
      slug
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  companyCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  learnCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pagePricingCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pagePressCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  homeCollection(limit: 2, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  featuresCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pageCustomersCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  communityCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pageCareersCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pageTrustCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  pageClientServerlessCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      hideFromSitemap
    }
  }
  generalDataCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      ...GeneralData
    }
  }
}
    ${MetadataFragmentDoc}
${GeneralDataFragmentDoc}`;
export const SolutionsPageDocument = gql`
    query SolutionsPage($preview: Boolean) {
  featuresCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview, where: {subId: "solutions"}) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      heroImage {
        ...Media
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
      subId
    }
  }
}
    ${MetadataFragmentDoc}
${MediaFragmentDoc}
${SectionFragmentDoc}`;
export const TeamPageDocument = gql`
    query TeamPage($preview: Boolean) {
  companyCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      heroSubtitle {
        json
      }
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionFragmentDoc}`;
export const TemplatePagesDocument = gql`
    query TemplatePages($preview: Boolean) {
  pageTemplateCollection(limit: 6, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      ...TemplatePage
    }
  }
}
    ${TemplatePageFragmentDoc}`;
export const TemplatePagesForPathsDocument = gql`
    query TemplatePagesForPaths($preview: Boolean) {
  pageTemplateCollection(limit: 100, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      slug
    }
  }
}
    `;
export const SingleTemplatePageDocument = gql`
    query SingleTemplatePage($preview: Boolean, $slug: String!) {
  pageTemplateCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview, where: {slug: $slug}) {
    items {
      ...TemplatePage
    }
  }
}
    ${TemplatePageFragmentDoc}`;
export const TrustPageDocument = gql`
    query TrustPage($preview: Boolean) {
  pageTrustCollection(limit: 1, order: sys_firstPublishedAt_DESC, preview: $preview) {
    items {
      metadata {
        ...Metadata
      }
      heroTitle
      sectionsCollection(limit: 10) {
        items {
          ...Section
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    BlogPage(variables?: BlogPageQueryVariables): Promise<BlogPageQuery> {
      return withWrapper(() => client.request<BlogPageQuery>(print(BlogPageDocument), variables));
    },
    BlogPostsSlugs(variables?: BlogPostsSlugsQueryVariables): Promise<BlogPostsSlugsQuery> {
      return withWrapper(() => client.request<BlogPostsSlugsQuery>(print(BlogPostsSlugsDocument), variables));
    },
    BlogPost(variables: BlogPostQueryVariables): Promise<BlogPostQuery> {
      return withWrapper(() => client.request<BlogPostQuery>(print(BlogPostDocument), variables));
    },
    CareersPage(variables?: CareersPageQueryVariables): Promise<CareersPageQuery> {
      return withWrapper(() => client.request<CareersPageQuery>(print(CareersPageDocument), variables));
    },
    ClientServerlessPage(variables?: ClientServerlessPageQueryVariables): Promise<ClientServerlessPageQuery> {
      return withWrapper(() => client.request<ClientServerlessPageQuery>(print(ClientServerlessPageDocument), variables));
    },
    CommunityPage(variables?: CommunityPageQueryVariables): Promise<CommunityPageQuery> {
      return withWrapper(() => client.request<CommunityPageQuery>(print(CommunityPageDocument), variables));
    },
    CustomersPage(variables?: CustomersPageQueryVariables): Promise<CustomersPageQuery> {
      return withWrapper(() => client.request<CustomersPageQuery>(print(CustomersPageDocument), variables));
    },
    EventsPage(variables?: EventsPageQueryVariables): Promise<EventsPageQuery> {
      return withWrapper(() => client.request<EventsPageQuery>(print(EventsPageDocument), variables));
    },
    FeaturesPage(variables?: FeaturesPageQueryVariables): Promise<FeaturesPageQuery> {
      return withWrapper(() => client.request<FeaturesPageQuery>(print(FeaturesPageDocument), variables));
    },
    GeneralData(variables?: GeneralDataQueryVariables): Promise<GeneralDataQuery> {
      return withWrapper(() => client.request<GeneralDataQuery>(print(GeneralDataDocument), variables));
    },
    HomePage(variables?: HomePageQueryVariables): Promise<HomePageQuery> {
      return withWrapper(() => client.request<HomePageQuery>(print(HomePageDocument), variables));
    },
    PartnersPage(variables?: PartnersPageQueryVariables): Promise<PartnersPageQuery> {
      return withWrapper(() => client.request<PartnersPageQuery>(print(PartnersPageDocument), variables));
    },
    PlatformPage(variables?: PlatformPageQueryVariables): Promise<PlatformPageQuery> {
      return withWrapper(() => client.request<PlatformPageQuery>(print(PlatformPageDocument), variables));
    },
    PressPage(variables?: PressPageQueryVariables): Promise<PressPageQuery> {
      return withWrapper(() => client.request<PressPageQuery>(print(PressPageDocument), variables));
    },
    PricingPage(variables?: PricingPageQueryVariables): Promise<PricingPageQuery> {
      return withWrapper(() => client.request<PricingPageQuery>(print(PricingPageDocument), variables));
    },
    PricingPageByID(variables: PricingPageByIdQueryVariables): Promise<PricingPageByIdQuery> {
      return withWrapper(() => client.request<PricingPageByIdQuery>(print(PricingPageByIdDocument), variables));
    },
    Redirects(variables?: RedirectsQueryVariables): Promise<RedirectsQuery> {
      return withWrapper(() => client.request<RedirectsQuery>(print(RedirectsDocument), variables));
    },
    ResourcesPage(variables?: ResourcesPageQueryVariables): Promise<ResourcesPageQuery> {
      return withWrapper(() => client.request<ResourcesPageQuery>(print(ResourcesPageDocument), variables));
    },
    Sitemap(variables?: SitemapQueryVariables): Promise<SitemapQuery> {
      return withWrapper(() => client.request<SitemapQuery>(print(SitemapDocument), variables));
    },
    SolutionsPage(variables?: SolutionsPageQueryVariables): Promise<SolutionsPageQuery> {
      return withWrapper(() => client.request<SolutionsPageQuery>(print(SolutionsPageDocument), variables));
    },
    TeamPage(variables?: TeamPageQueryVariables): Promise<TeamPageQuery> {
      return withWrapper(() => client.request<TeamPageQuery>(print(TeamPageDocument), variables));
    },
    TemplatePages(variables?: TemplatePagesQueryVariables): Promise<TemplatePagesQuery> {
      return withWrapper(() => client.request<TemplatePagesQuery>(print(TemplatePagesDocument), variables));
    },
    TemplatePagesForPaths(variables?: TemplatePagesForPathsQueryVariables): Promise<TemplatePagesForPathsQuery> {
      return withWrapper(() => client.request<TemplatePagesForPathsQuery>(print(TemplatePagesForPathsDocument), variables));
    },
    SingleTemplatePage(variables: SingleTemplatePageQueryVariables): Promise<SingleTemplatePageQuery> {
      return withWrapper(() => client.request<SingleTemplatePageQuery>(print(SingleTemplatePageDocument), variables));
    },
    TrustPage(variables?: TrustPageQueryVariables): Promise<TrustPageQuery> {
      return withWrapper(() => client.request<TrustPageQuery>(print(TrustPageDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;