import React from 'react';

class FaceBrick extends React.Component {
  constructor(props) {
    super();
    this.state = {  tint: ((props.on)?"#"+props.color:''),
                    id : props.id }
  }
  render() {
    const {tint, id} = this.state;
    return (
      <div className='facebrick' id={id} style={{margin:'0px', backgroundColor:tint, width:'10px', height:'10px', display:'inline-block', float:'right', overflow:'hidden'}}></div>
    )
  }
};

class Face extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares : [],
      color : '',
    };

    let chars = props.name.split('').map((x, i) => { return( x.toUpperCase().charCodeAt(0) ); } );
    while ( chars.length < 9 ){
      chars.push(0);
    }

    const row1 = chars.slice(0,3).map((x, i) => { return( ( x > 77 ) ? 1 : 0 ) } );
    const row2 = chars.slice(3,6).map((x, i) => { return( ( x > 77 ) ? 1 : 0 ) } );
    const row3 = chars.slice(6,9).map((x, i) => { return( ( x > 77 ) ? 1 : 0 ) } );

    this.state.squares.push(...row1);
    this.state.squares.push(...row1.reverse());
    this.state.squares.push(...row2);
    this.state.squares.push(...row2.reverse());
    this.state.squares.push(...row3);
    this.state.squares.push(...row3.reverse());
    this.state.squares.push(...row1);
    this.state.squares.push(...row1.reverse());
    this.state.squares.push(...row2);
    this.state.squares.push(...row2.reverse());
    this.state.squares.push(...row3);
    this.state.squares.push(...row3.reverse());


    const cvals = chars.slice(0,3).map((x,i) => {
      if( x < 2 ) return ( 'A' + x.toString() );
      if( x < 4 ) return ( 'B' + x.toString() );
      if( x < 6 ) return ( 'C' + x.toString() );
      if( x < 8 ) return ( 'D' + x.toString() );
      if( x < 10 ) return ( 'E' + x.toString() );
      return( x.toString() );
    } );

    this.state.color = cvals.join('');

    console.log(this.state.squares);
  }

  render() {
    const { squares, color } = this.state;
    let blocks = [];
    squares.map((x,i) => {
      blocks.push(<FaceBrick id={i} color={color} on={x} />)
    })
    let tint = '#' + color;
    return(
      <div>
        <div className='facebox' style={{ spacing:'0px', overflow:'hidden', padding:'5px', borderWidth:'4px', borderStyle:'solid', borderColor:tint, display:'inline-block', borderRadius:'10px 10px 0px 0px'  }}>
          <div className='face' style={{ cellSpacing:'0px', overflow:'hidden', width:'60px', height:'60px', borderWidth:'4px', borderStyle:'solid', borderColor:tint }}>
            {blocks}
          </div>
        </div>
      </div>
    )
  }
}

export default Face
