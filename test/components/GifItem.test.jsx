
/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {
    
    const title = 'Luffy';
    const url = 'http://pm1.narvii.com/6095/24c155d009166081dc137b65ff632d76e1b41fe4_00.jpg';

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifItem title={ title } url={ url }/> )
        //screen.debug();
        //expect( screen.getByRole('img').src ).toBe( url );
        //expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe de mostrar el titulo en el componente', () => {

        render( <GifItem title={ title } url={ url }/> )
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});