import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'color',
  // Visible label
  label: 'Color',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'color', label: 'Color', widget: 'string' }],
})
