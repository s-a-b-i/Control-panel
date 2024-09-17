import React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledPaper = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(1),
  marginBottom: theme.spacing(3),
  minWidth: '650px',
  margin: '10px 50px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(3),
  padding: theme.spacing(2),  
  alignItems: 'center',
  '& > *': {
    textAlign: 'left',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  width: '100%',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  // margin: theme.spacing(1, 0),
  width: '100%',
}));



const StyledTextField = styled(TextField)({
  width: '100%',
});

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  // padding: theme.spacing(1),
}));

const AppConfigForm = () => {
  const { t } = useTranslation();

  return (
    <StyledPaper>
      <HeaderBox>
        <StyledBox>
          <Typography>{t('Parameter Description')}</Typography>
          <Typography>{t('Parameter Value')}</Typography>
          <Typography>{t('Parameter Description')}</Typography>
        </StyledBox>
      </HeaderBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('APP Packaging Display Mode')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Chat Application')}>
            <MenuItem value={t('Chat Application')}>{t('Chat Application')}</MenuItem>
            <MenuItem value={t('Website Packaging')}>{t('Website Packaging')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('If you choose the Website Packaging mode, your website will be displayed directly when you open the APP. Of course, all functions related to the chat application will be unavailable.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Package URL')}</Typography>
        <StyledTextField defaultValue="https://www.baidu.com/" />
        <Typography>{t('If you choose the packaged website mode above, this field is required. Open the APP and load the URL directly. At the same time, the device number devId=xxxxx will be automatically transmitted to facilitate you to identify which mobile phone is the source.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Encapsulating Website Screens')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Show Top Status Bar + Navigation Bar')}>
            <MenuItem value={t('Do Not Display (Full Screen)')}>{t('Do Not Display (Full Screen)')}</MenuItem>
            <MenuItem value={t('Show Only the Top Status Bar')}>{t('Show Only the Top Status Bar')}</MenuItem>
            <MenuItem value={t('Show Top Status Bar + Navigation Bar')}>{t('Show Top Status Bar + Navigation Bar')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Choose according to the actual situation of your website UI. For example, if the website already has a navigation bar, you can remove it. For instance, the video site can be full screen, etc. You can preview the effect on the APP side before deciding.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('The URL of the 5-second countdown ad on the startup page')}</Typography>
        <StyledTextField />
        <Typography>{t('Image URL, can be empty')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Startup page 5-second countdown ad link address')}</Typography>
        <StyledTextField />
        <Typography>{t('Click the ad image to open in an external browser, can be empty')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('How many times to force setting')}</Typography>
        <StyledTextField defaultValue="1" />
        <Typography>{t('Example: 3 means that if there are incorrect settings when you open the app for the third time, you must set them up before you can enter; if there are incorrect settings in the first two times you open the app, you will be prompted to set them up but they will not be forced. Fill in 1 to force the setting when you open the app for the first time')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Landing page (download page) URL')}</Typography>
        <StyledTextField />
        <Typography>{t('Used to generate the front part of the QR code, which will automatically be followed by parameters such as the user/group ID and invitation code. It is usually a URL of the APP navigation download site. Note that the format such as http://www.domain.com/ must end with /')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Is change available?')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Open')}>
            <MenuItem value={t('Open')}>{t('Open')}</MenuItem>
            <MenuItem value={t('Close')}>{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Only when it is turned on can I have functions such as my change, red envelope, transfer, etc.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Is it mandatory to select an avatar when registering?')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('No, Optional')}>
            <MenuItem value={t('Yes, Required')}>{t('Yes, Required')}</MenuItem>
            <MenuItem value={t('No, Optional')}>{t('No, Optional')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Is the invitation code mandatory for registration?')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('No, Optional')}>
            <MenuItem value={t('Yes, Required')}>{t('Yes, Required')}</MenuItem>
            <MenuItem value={t('No, Optional')}>{t('No, Optional')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Only enable it if you are sure it is necessary. Either leave the invitation code blank or enter a valid one. If you enter an invalid invitation code, registration will fail.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Smart Assistant Settings Policy')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Force the smart assistant to be enabled at startup')}>
            <MenuItem value={t('Force the smart assistant to be enabled at startup')}>{t('Force the smart assistant to be enabled at startup')}</MenuItem>
            <MenuItem value={t('Pop-up setting at startup but not mandatory')}>{t('Pop-up setting at startup but not mandatory')}</MenuItem>
            <MenuItem value={t('Do not pop-up settings on startup')}>{t('Do not pop-up settings on startup')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Since some users (especially high-quality customers) are reluctant to turn on the smart assistant for the first time, it is recommended to adopt a strategy of not forcing or directly turning off the setting, allowing normal use first to retain users, and then guiding them to "Me--Settings--Smart Assistant" to turn it on. Otherwise, it will be more costly to give up before the user can use it normally.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether to enable the friend search function')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Open')}>
            <MenuItem value={t('Open')}>{t('Open')}</MenuItem>
            <MenuItem value={t('Close')}>{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('To add a friend, you need to enable at least one of the following: username search or nickname search')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether to enable ordinary users to search for friends')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Open')}>
            <MenuItem value={t('Open')}>{t('Open')}</MenuItem>
            <MenuItem value={t('Close')}>{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Whether to display the menu option "Add friend" for ordinary users. Ordinary users refer to users other than those with roles (administrator, agent, finance, visitor, public account).')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether to enable ordinary users to create groups')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Open')}>
            <MenuItem value={t('Open')}>{t('Open')}</MenuItem>
            <MenuItem value={t('Close')}>{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Whether to display the menu option "Start a group chat" for ordinary users. Ordinary users refer to users other than those with roles (administrator, agent, finance, visitor, public account).')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether to hide the logout button for ordinary users')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Show')}>
            <MenuItem value={t('Show')}>{t('Show')}</MenuItem>
            <MenuItem value={t('Hide')}>{t('Hide')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('In order to limit the repeated registration of freeloaders, the "Me--Settings--Log Out Current Account" button can be hidden; internal users are not subject to this restriction and will always be displayed.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether to enable group search')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Open')}>
            <MenuItem value={t('Open')}>{t('Open')}</MenuItem>
            <MenuItem value={t('Close')}>{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('If enabled, the search icon will be displayed in the Contacts - Groups - and public groups (relative to private groups) will be searched based on the group name.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Company Name')}</Typography>
        <StyledTextField defaultValue="Test" />
        <Typography>{t('Settings - Display at the bottom of the About Us page')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Copyright Information')}</Typography>
        <StyledTextField defaultValue="Copyright © 2019-2024 Test. All Rights Reserved." />
        <Typography>{t('Settings - Display at the bottom of the About Us page')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('The latest version of Android')}</Typography>
        <StyledTextField />
        <Typography>{t('Example: Assuming the latest version number is 3.0.1, fill in 301. After uploading the latest installation package to the distribution platform, fill in the latest version number here. Every time the APP is opened, it will detect if there is a new version and pop up the download page, so the landing page (download page) above must be filled in!!!')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Android Disabled Version Number')}</Typography>
        <StyledTextField />
        <Typography>{t('For example: Fill in 300 to indicate that the APP will prompt and pop up the download page when opening the APP if the version is lower than (including) 3.0.0, and it will not be able to be used normally until it is updated to the latest version.')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('APP bottom menu button: Discover')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Show')}>
            <MenuItem value={t('Show')}>{t('Show')}</MenuItem>
            <MenuItem value={t('Hide')}>{t('Hide')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Similar to WeChat Moments')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('APP bottom menu button: Custom')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('Show')}>
            <MenuItem value={t('Show')}>{t('Show')}</MenuItem>
            <MenuItem value={t('Hide')}>{t('Hide')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('If you need to encapsulate and nest your website')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Custom button names')}</Typography>
        <StyledTextField defaultValue="Baidu" />
        <Typography>{t('Required if "Display" is selected in the above customization')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Custom URL')}</Typography>
        <StyledTextField defaultValue="https://m.baidu.com/" />
        <Typography>{t('Required if "Display" is selected in the above customization')}</Typography>
      </StyledBox>

      <StyledDivider />

      <StyledBox>
        <Typography>{t('Whether the URL passes the access token')}</Typography>
        <StyledFormControl>
          <Select defaultValue={t('No')}>
            <MenuItem value={t('Yes')}>{t('Yes')}</MenuItem>
            <MenuItem value={t('No')}>{t('No')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('If you need to connect to your third-party website to achieve data intercommunication, pass the token to your website technician to call back this server, no need to select "No"')}</Typography>
      </StyledBox>
    </StyledPaper>
  );
};

export default AppConfigForm;