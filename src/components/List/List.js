import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';


class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    alt: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, alt, description} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} imageText={image} imageAlt={alt}/>
        <div className={description}>
          {ReactHtmlParser(description)}
        </div>
        {/*
        <div className={styles.columns}>
          {this.state.columns.map(({key, icon, ...columnProps}) => (
            <Column key={key} icon={icon} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
          */}
      </section>
    );
  }
}

export default List;
