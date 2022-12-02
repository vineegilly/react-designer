import React, {Component} from 'react';
import Radium from 'radium';

class SVGRenderer extends Component {
  static defaultProps = {
    onMouseOver() {}
  };

  getObjectComponent(type) {
    let {objectTypes} = this.props;
    return objectTypes[type];
  }

  renderObject(object, index) {
    let {objectRefs, onMouseOver} = this.props;
    let Renderer = this.getObjectComponent(object.type);
    const onKeyPress = (e) => { 
      if(e.code ==="Space" || e.code==="Enter"){
        this.props.clickHandler(object)
      }
     }
    return (
      <Renderer onRender={(ref) => objectRefs[index] = ref} onKeyPress={(e)=>onKeyPress(e)} onClick={()=>this.props.clickHandler(object)} className={`${object.type}-${index}`}
        onMouseOver={onMouseOver.bind(this, index)}
        object={object}  key={index} index={index} />
      );
  }

  render() {
    let {background, objects, svgStyle, canvas, 
         onMouseDown, onRender} = this.props;
    let {width, height, canvasOffsetX, canvasOffsetY} = canvas;

    let style = [
      styles.canvas, 
      background ? {
        backgroundColor: background
      }: getBackgroundImage(this.props.backgroundImage), 
      {
        ...svgStyle,
        border:'1px solid black',
        marginTop: canvasOffsetY,
        marginLeft: canvasOffsetX
      }
    ];

    return (
      <svg onMouseDown={onMouseDown}
         ref={onRender}
         width={width} 
         height={height}
         style={style}>
        {objects.map(this.renderObject.bind(this))}
      </svg>
    );
  }
}

export const styles = {
  canvas: {
    backgroundSize: 400
  }
};
const getBackgroundImage = (background = null) => {
  return {
    backgroundImage : background ? `url(${background})` : 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5'
      + 'vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0'
      + 'PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9I'
      + 'iNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIG'
      + 'ZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
    backgroundSize: "auto"
  }
}
export default Radium(SVGRenderer);