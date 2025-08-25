import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayBlogTags extends Struct.ComponentSchema {
  collectionName: 'components_array_blog_tags';
  info: {
    displayName: 'blog_tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface ArrayExperienceSectionAchievements
  extends Struct.ComponentSchema {
  collectionName: 'components_array_experience_section_achievements';
  info: {
    displayName: 'experience_section_achievements';
  };
  attributes: {
    achievement: Schema.Attribute.Text;
  };
}

export interface ArrayExperienceSectionTechnology
  extends Struct.ComponentSchema {
  collectionName: 'components_array_experience_section_technologies';
  info: {
    displayName: 'experience_section_technology';
  };
  attributes: {
    technology: Schema.Attribute.String;
  };
}

export interface ArrayProfessionalLinks extends Struct.ComponentSchema {
  collectionName: 'components_array_professional_links';
  info: {
    displayName: 'professional_links';
  };
  attributes: {
    displayName: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['globe', 'file-text']>;
    platform: Schema.Attribute.Enumeration<['Portfolio', 'Resume']>;
    url: Schema.Attribute.String;
  };
}

export interface ArrayProjectComponent extends Struct.ComponentSchema {
  collectionName: 'components_array_project_components';
  info: {
    displayName: 'project_component';
  };
  attributes: {
    technology: Schema.Attribute.String;
  };
}

export interface ArraySocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_array_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    display_name: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['linkedin', 'github', 'twitter', 'instagram']
    >;
    platform: Schema.Attribute.Enumeration<
      ['LinkedIn', 'GitHub', 'Twitter', 'Instagram']
    >;
    url: Schema.Attribute.String;
  };
}

export interface MetadataSeoAuthors extends Struct.ComponentSchema {
  collectionName: 'components_metadata_seo_authors';
  info: {
    displayName: 'authors';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface MetadataSeoKeyWords extends Struct.ComponentSchema {
  collectionName: 'components_metadata_seo_key_words';
  info: {
    displayName: 'key_words';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'array.blog-tags': ArrayBlogTags;
      'array.experience-section-achievements': ArrayExperienceSectionAchievements;
      'array.experience-section-technology': ArrayExperienceSectionTechnology;
      'array.professional-links': ArrayProfessionalLinks;
      'array.project-component': ArrayProjectComponent;
      'array.social-links': ArraySocialLinks;
      'metadata-seo.authors': MetadataSeoAuthors;
      'metadata-seo.key-words': MetadataSeoKeyWords;
    }
  }
}
