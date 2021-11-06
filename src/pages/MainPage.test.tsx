import React from 'react';

import { render,fireEvent } from '@testing-library/react';

import MainPage from './MainPage';

describe('WelcomeModal', () => {

    context('사용자가 메인페이지에 들어왔을 때,', () => {
        it('텍스트 보여준다.', () => {
            const { getByLabelText } = render(<MainPage/>);

            const input = getByLabelText('nickname') as HTMLInputElement;

            fireEvent.change(input, { target : { value : "안녕하세요" }});

            expect(input.value).toBe('안녕하세요');
        });
    })
})