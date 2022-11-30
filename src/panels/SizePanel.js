import React from 'react';
import _ from 'lodash';

import Panel from './Panel';

import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';

export default class SizePanel extends Panel {
  render() {
    let {object} = this.props;
    return (
      <PropertyGroup object={object}>
        <Columns label="Name">
            <Column label="Object Name" value={object.name || ""} inputStyle={{width: "100%"}}
                  onChange={this.props.onChange.bind(this, 'name')} />
          </Columns>
        {_.has(object, 'width', 'height') && <Columns label="Size">
          <Column showIf={_.has(object, 'width')}
                  label="width" value={object.width}
                  type="number"
                  onChange={this.props.onChange.bind(this, 'width')} />
          <Column showIf={_.has(object, 'height')} label="height"
                  value={object.height}
                  type="number"
                  onChange={this.props.onChange.bind(this, 'height')} />
        </Columns>}
        <Columns label="Position">
          <Column showIf={_.has(object, 'x')}
                  label="top" value={object.x}
                  type="number"
                  onChange={this.props.onChange.bind(this, 'x')} />
          <Column showIf={_.has(object, 'y')} label="top" value={object.y}  type="number"
                  onChange={this.props.onChange.bind(this, 'y')} />
        </Columns>
        {_.has(object, 'rotate') && <Columns label="Rotation">
          <Column label="angle" value={object.rotate}
                  onChange={this.props.onChange.bind(this, 'rotate')}  type="number"/>
        </Columns>}
        <Columns label="Delete">
          <button onClick={this.props.onDelete}>Delete Shape</button>
        </Columns>
      </PropertyGroup>
    );
  }
}
