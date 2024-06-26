'use client';

import Island from '@/components/Island';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { HeaderTextContainer } from './styles';
import useScreenSize from '@/hooks/useScreenSize';
import colors from '@/colors';
import PageContainer from '@/components/Containers/PageContainer';

const App: FC = () => {
    const { isMobile } = useScreenSize();
    return (
        <PageContainer>
            <Island>
                <HeaderTextContainer direction={isMobile ? 'column' : 'row'}>
                    <Typography
                        variant={isMobile ? 'h3' : 'h1'}
                        color={colors.white}
                    >
                        hi, i&apos;m
                    </Typography>
                    <Typography
                        padding="0 8px"
                        variant={isMobile ? 'h2' : 'h1'}
                        color={colors.accent}
                    >
                        Natasha
                    </Typography>
                </HeaderTextContainer>
                <Typography
                    padding="8px"
                    variant="body1"
                    textAlign="center"
                    color={colors.white}
                >
                    i&apos;m a full stack developer. you&apos;ve found my
                    work-in-progress site which I am building with React and
                    NextJS. for now, if you like, here are some of my projects,
                    or alternatively, some places you can find out more about
                    me.
                </Typography>
            </Island>
        </PageContainer>
    );
};

export default App;
