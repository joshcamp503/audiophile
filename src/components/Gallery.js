// STYLES 
import './component-styles/Gallery.css'

// HOOKS
import { useMediaSize } from '../hooks/useMediaSize';

function Gallery({ product }) {
  const media = useMediaSize();
  return (
    <div className="gallery">
      <img src={require(`../assets/product-${product.slug}/${media}/image-gallery-1.jpg`)} alt={`First gallery photo of ${product.slug} in use`} className="gallery1" />
      <img src={require(`../assets/product-${product.slug}/${media}/image-gallery-2.jpg`)} alt={`Second gallery photo of ${product.slug} in use`} className="gallery2" />
      <img src={require(`../assets/product-${product.slug}/${media}/image-gallery-3.jpg`)} alt={`Third gallery photo of ${product.slug} in use`} className="gallery3" />
    </div>
  );
}

export default Gallery;
