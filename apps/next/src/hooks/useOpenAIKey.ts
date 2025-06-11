import { setOpenAIKey } from '@/datas/slice/settings';
import { RootState } from '@/datas/store/app';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useOpenAIKey = () => {
    const { openAI } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!openAI.key || openAI.key === '') {
            (async () => {
                const key = await window.settings.openAI.getKey();
                dispatch(setOpenAIKey(key));
            })();
        }
    });

    return openAI.key;
};

export default useOpenAIKey;
