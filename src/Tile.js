import React from 'react';

const Tile = React.memo(({state, onContextHandler, onClickHandler, config}) => {;
  // const content = state.active ? state.mine ? '💣' : state.content || '' : state.flag ? '🚩' : '' ;
  const content = state.active 
    ? state.mine ? config.mine : (config.contentMap || {})[state.content] || state.content || config.active 
    : state.flag ? config.flag : config.inactive;
  const context = (e) => {
    e.preventDefault();
    onContextHandler()
  };
  const className = `Tile ${state.active ? 'active' : state.flag? '' :'inactive'} proximity${state.content} ${state.flag ? 'flag' : ''}  ${state.mine ? 'mine' : ''} ${state.helper ? 'helper': ''}`
  return (
    <div 
      onClick={() => {onClickHandler()}}
      onContextMenu={(e) => context(e)}
      className={className}>
      <div className='content'>
      { !`${content}`.includes('.svg') ? content : <img alt='svg icon' src={content}></img> }
      </div>

    </div>
  );
});

export default Tile;
