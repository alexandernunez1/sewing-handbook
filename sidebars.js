/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure


  // But you can create a sidebar manually
    customSidebar: [
      {
        type: 'doc',
        id: 'intro',
        label: 'Introduction',
        
      },
    {
      type: 'category',
      
      label: 'Machine',
      collapsible: true,
      collapsed: true,
      items: ['machine/skyline', 'machine/essential-parts'],
      
    },
    {
      type: 'category',
      
      label: 'Basic Sewing',
      collapsible: true,
      collapsed: true,
      items: ['sewing-basics/straight-stitch'],
    },
    {
      type: 'category',
      
      label: 'Textiles',
      collapsible: true,
      collapsed: true,
      items: ['textiles/sources-types', 'textiles/wool'],
    }

  ],

   
};

module.exports = sidebars;
