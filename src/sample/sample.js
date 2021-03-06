
// User role
var userRole = 0;

// Intervals
var selectedPollingInterval = 1;
var pollingIntervalStr = ['30 sec ', '1 min ', '5 min ', '15 min '];
var selectedStatusAcquisitionInterval = 2;
var statusAcquisitionIntervalStr = ['5 min ', '15 min ', '30 min ', '60 min '];

// Selected command ID on command page
var selectedCommand = -1;

// Selected user on user management page
var selectedUser = '';

// Selected index number of status acquisition command on agent info page.
var selectedAgentStatusCommand = -1;
// Selected index number of operation command on agent info page.
var selectedOperationCommand = -1;

// Notifications
var svrinfo_msg = '';
var command_msg = '';
var usermgt_msg = '';

function initClientMessage() {
    addClientMessage('AGENTINFO', {'en':' Agent Info', 'ja':' Agent Info'});
    addClientMessage('SERVERINFO', {'en':' Server Info', 'ja':' Server Info'});
    addClientMessage('COMMAND', {'en':' Command', 'ja':' Command'});
    addClientMessage('AUDITLOG', {'en':' Audit Log', 'ja':' Audit Log'});
    addClientMessage('USERMGT', {'en':' User Management', 'ja':' User Management'});

    addClientMessage('NOLOGINFO', {'en':'<p>No log information</p>', 'ja':'<p>ログはありません</p>'});
    addClientMessage('NOAGTINFO', {'en':'<p>No agent information</p>', 'ja':'<p>エージェント情報はありません</p>'});
    addClientMessage('NOCMDEXIST', {'en':'<p>No command exists</p>', 'ja':'<p>コマンドはありません</p>'});
    addClientMessage('NOUSEREXIST', {'en':'<p>No user exists</p>', 'ja':'<p>ユーザーは存在しません</p>'});

    addClientMessage('AINAME', {'en':'Name', 'ja':'名称'});
    addClientMessage('AISTATUS', {'en':'Status', 'ja':'状態'});
    addClientMessage('AISTATUSCMD', {'en':'Command for Status', 'ja':'状態取得コマンド'});
    addClientMessage('AISTATUSTIME', {'en':'Status Acquisition Time', 'ja':'状態取得時刻'});
    addClientMessage('AISTATUSUPTIME', {'en':'Status Update Time', 'ja':'状態更新時刻'});
    addClientMessage('AIOPSTATUS', {'en':'OpStatus', 'ja':'操作状態'});
    addClientMessage('AIOPSTATUSCMD', {'en':'Command for Op', 'ja':'操作コマンド'});
    addClientMessage('AISETSTATUSCMD', {'en':'Set Status Command', 'ja':'状態取得コマンドの設定'});
    addClientMessage('AIEXECCMD', {'en':'Execute Op Command', 'ja':'操作コマンドの実行'});
    addClientMessage('SELOPCMD', {'en':'Select operation command', 'ja':'操作コマンドを選択してください'});
    addClientMessage('SELSTATUSCMD', {'en':'Select status acquisition command', 'ja':'状態取得コマンドを選択してください'});
    addClientMessage('SELCMD', {'en':'Select Command ', 'ja':'コマンドを選択してください'});
    addClientMessage('RESCODE-980', {'en':'-980 : Agent service has started.\r\n', 'ja':'-980 : エージェントサービスが起動した\r\n'});
    addClientMessage('RESCODE-981', {'en':'-981 : No script is defined.\r\n', 'ja':'-981 : スクリプトが定義されていない\r\n'});
    addClientMessage('RESCODE-982', {'en':'-982 : Status acquisition cmd has been changed.\r\n', 'ja':'-982 : 状態取得コマンドが変更された\r\n'});
    addClientMessage('RESCODE-983', {'en':'-983 : Operation cmd has been changed.\r\n', 'ja':'-983 : 操作コマンドが変更された\r\n'});
    addClientMessage('RESCODE-984', {'en':'-984 : Waiting for a request.\r\n', 'ja':'-984 : 要求待ち\r\n'});
    addClientMessage('RESCODE-985', {'en':'-985 : A command for operation has started.\r\n', 'ja':'-985 : 操作コマンドが実行された\r\n'});
    addClientMessage('RESCODE-990', {'en':'-990 : Server file handling error.\r\n', 'ja':'-990 : サーバファイルハンドリングエラー\r\n'});
    addClientMessage('RESCODE-991', {'en':'-991 : Agent file handling error.\r\n', 'ja':'-991 : エージェントファイルハンドリングエラー\r\n'});
    addClientMessage('RESCODE-992', {'en':'-992 : Platform error.\r\n', 'ja':'-992 : プラットフォームエラー\r\n'});
    addClientMessage('RESCODE-993', {'en':'-993 : No request from agent.\r\n', 'ja':'-993 : エージェントからの要求がない\r\n'});
    addClientMessage('RESCODE-994', {'en':'-994 : Invalid agent directory.\r\n', 'ja':'-994 : エージェントディレクトリが不正\r\n'});

    addClientMessage('SISTARTTIMEUTC', {'en':'Service Start Time (UTC)', 'ja':'サービス開始時刻 (UTC)'});
    addClientMessage('SISTARTTIMELOC', {'en':'Service Start Time (Local)', 'ja':'サービス開始時刻 (Local)'});
    addClientMessage('SISVRVERSION', {'en':'Server Version : ', 'ja':'サーバーバージョン : '});
    addClientMessage('SIPOLLINTVL', {'en':'Polling Interval : ', 'ja':'ポーリング間隔 : '});
    addClientMessage('SISTACQINTVL', {'en':'Status Acquisition Interval : ', 'ja':'状態取得間隔 : '});
    addClientMessage('SIPATHTOBUCKET', {'en':'Path to bucket : ', 'ja':'バケットのパス : '});
    addClientMessage('SIUPDATEBTN', {'en':'Update', 'ja':'更新'});
    addClientMessage('SIUPDATED', {'en':'The server information has been updated.', 'ja':'サーバー情報が更新されました。'});

    addClientMessage('COMNAME', {'en':'Command Name', 'ja':'コマンド名'});
    addClientMessage('COMCOPYTOAGT', {'en':'File To Be Copied To Agent (Only file name. Do not specify directory path.)', 'ja':'エージェントにコピーされるファイル (ファイル名のみ)'});
    addClientMessage('COMTYPE', {'en':'Command Type', 'ja':'コマンド種別'});
    addClientMessage('COMSCRIPT', {'en':'Script', 'ja':'スクリプト'});
    addClientMessage('COMCOPYTOSVR', {'en':'File To Be Copied To Server (Only file name. Do not specify directory path.)', 'ja':'サーバーにコピーされるファイル (ファイル名のみ)'});
    addClientMessage('COMPLACESVR', {'en':'Name of file Placed In Server', 'ja':'サーバーに配置されたファイルの名称'});
    addClientMessage('COMPLACEAGT', {'en':'Name of file Placed In Agent', 'ja':'エージェントに配置されたファイルの名称'});
    addClientMessage('COMADD', {'en':'Add', 'ja':'追加'});
    addClientMessage('COMUPDATE', {'en':'Update', 'ja':'更新'});
    addClientMessage('COMDELETE', {'en':'Delete', 'ja':'削除'});
    addClientMessage('COMADDED', {'en':'New command has been added.', 'ja':'新規にコマンドが追加されました。'});
    addClientMessage('COMUPDATED', {'en':'The specified command has been updated.', 'ja':'指定したコマンドが更新されました。'});
    addClientMessage('COMDELETED', {'en':'The specified command has been deleted', 'ja':'指定したコマンドが削除されました。'});
    addClientMessage('COMMANDLABEL', {'en':'Command : ', 'ja':'コマンド : '});

    addClientMessage('USERNAME', {'en':'User Name', 'ja':'ユーザー名'});
    addClientMessage('USERROLE', {'en':'User Role', 'ja':'ユーザーロール'});
    addClientMessage('USERROLEADMIN', {'en':'Administrator', 'ja':'管理者'});
    addClientMessage('USERROLEUSER', {'en':'General User', 'ja':'一般ユーザー'});

    addClientMessage('LOGEVENTTIME', {'en':'Event Occurrence Time', 'ja':'イベント発生時刻'});
    addClientMessage('LOGEVENT', {'en':'Event', 'ja':'イベント'});

    addClientMessage('CONNERR', {
        'en':'Connection with REST API service failed. This may be caused by one of the following issues:<br>(1) REST API service cannot be started.<br>(2) REST API service is not registered as a firewall exception.<br>(3) The definition file [nginx.conf and/or sample.conf] for the host name and port number in the network connectivity settings is invalid.<br>(4) A timeout has occurred when waiting for data from REST API server.<br>',
        'ja':'REST APIサービスとの通信が失敗しました。次の要因が考えられます。<br>(1) REST APIサービスが開始されていない。<br>(2) REST APIサービスがファイアウォールに例外登録されていない。<br>(3) 接続先ホスト名およびポート番号の定義ファイル [nginx.conf , sample.conf] が不正。<br>(4) REST APIサーバからのデータ取得中にタイムアウトが発生した。<br>'
    });
}

function getArray(targetObject) {
    if (targetObject === undefined) {
        return null;
    }
    var targetArray = [];
    if (targetObject instanceof Array) {
        return targetObject;
    } else {
        targetArray.push(targetObject);
        return targetArray;
    }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function displayLogInfo() {
    $('#loginfo').append('<h2>' + getClientMessage('AUDITLOG') + '</h2>');
    if (statusCode['API_GET_LOGS'] == -1 || statusCode['API_GET_LOGS'] == 0) {
        displayAlertDanger('#loginfo', getClientMessage('CONNERR'));
        return;
    }
    var Log = getArray(responseData['API_GET_LOGS'].Log);
    if (Log == null) {
        $('#loginfo').append(getClientMessage('NOLOGINFO'));
        return;
    }

    var logData = $('<table>');
    logData.addClass('table table-striped');

    var tHead = $('<thead>');
    tHead.append('<tr><th>' + getClientMessage('LOGEVENTTIME') + '</th><th>' + getClientMessage('LOGEVENT') + '</th></tr>');
    logData.append(tHead);

    var tBody = $('<tbody>');
    for (var Loop = 0; Loop < Log.length; Loop++) {
        tBody.append('<tr><td>' + Log[Loop].TimeUtc + '<br/>' + Log[Loop].TimeLocal + '</td><td>' + Log[Loop].Msg + '</td></tr>');
    }
    logData.append(tBody);
    $('#loginfo').append(logData);
    $('td').css('vertical-align', 'middle');
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function displayAgentInfo() {
    $('#agtinfo').append('<h2>' + getClientMessage('AGENTINFO') + '</h2>');
    if (statusCode['API_GET_AGTINFO'] == -1 || statusCode['API_GET_AGTINFO'] == 0) {
        displayAlertDanger('#agtinfo', getClientMessage('CONNERR'));
        return;
    }
    var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
    if (AgentInfo == null) {
        $('#agtinfo').append(getClientMessage('NOAGTINFO'));
        return;
    }
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);

    selectedAgentStatusCommand = -1;
    selectedOperationCommand = -1;

    var agentInfoData = $('<table>');
    agentInfoData.addClass('table table-striped');

    var tHead = $('<thead>');
    tHead.append('<tr>' +
                 '<th>' + getClientMessage('AINAME') + '</th>' +
                 '<th>' + getClientMessage('AISTATUS') + '</th>' +
                 '<th class="d-none d-sm-table-cell">' + getClientMessage('AISTATUSCMD') + '</th>' +
                 '<th>' + getClientMessage('AISTATUSTIME') + '</th>' +
                 '<th class="d-none d-md-table-cell">' + getClientMessage('AISTATUSUPTIME') + '</th>' +
                 '<th class="d-none d-lg-table-cell">' + getClientMessage('AIOPSTATUS') + '</th>' +
                 '<th class="d-none d-lg-table-cell">' + getClientMessage('AIOPSTATUSCMD') + '</th>' +
                 '</tr>');
    agentInfoData.append(tHead);

    var tBody = $('<tbody>');
    agentInfoData.append(tBody);
    $('#agtinfo').append(agentInfoData);
    for (var Loop = 0; Loop < AgentInfo.length; Loop++) {
        var cmdNameStatus = '';
        for (var loopcmd = 0; commandList != null && loopcmd < commandList.length; loopcmd++) {
            if (AgentInfo[Loop].StatusCmd == commandList[loopcmd].Id) {
                cmdNameStatus = commandList[loopcmd].Name;
                break;
            }
        }
        var cmdNameOp = '';
        for (var loopcmd = 0; commandList != null && loopcmd < commandList.length; loopcmd++) {
            if (AgentInfo[Loop].OpCmd == commandList[loopcmd].Id) {
                cmdNameOp = commandList[loopcmd].Name;
                break;
            }
        }
        tBody.append('<tr>' +
                     '<td><div class="checkbox"><label><input type="checkbox" id="agtInfoId' + Loop + '" value="" onclick="switchAgentInfoButton()"/>' + AgentInfo[Loop].Name + '</label></div></td>' +
                     '<td><div align="center" id="statusTd' + Loop + '" data-toggle="tooltip" title="' + getTooltipStr() + '">' + AgentInfo[Loop].Status + '</div></td>' +
                     '<td class="d-none d-sm-table-cell">' + cmdNameStatus + '</td>' +
                     '<td>' + AgentInfo[Loop].TimeUtc + '<br/>' + AgentInfo[Loop].TimeLocal + '</td>' +
                     '<td class="d-none d-md-table-cell">' + AgentInfo[Loop].UdTimeUtc + '<br/>' + AgentInfo[Loop].UdTimeLocal + '</td>' +
                     '<td class="d-none d-lg-table-cell"><div align="center" id="opStatusTd' + Loop + '" data-toggle="tooltip" title="' + getTooltipStr() + '">' + AgentInfo[Loop].OpStatus + '</div></td>' +
                     '<td class="d-none d-lg-table-cell">' + cmdNameOp + '</td>' +
                     '</tr>');
        // Draw rectangle for agent status
        if (AgentInfo[Loop].Status == 0) {
            $('#statusTd' + Loop).css('background-color', 'LightGreen');
        } else if (AgentInfo[Loop].Status <= -980 && AgentInfo[Loop].Status >= -989) {
            $('#statusTd' + Loop).css('background-color', 'LightGreen');
        } else {
            $('#statusTd' + Loop).css('background-color', 'LightCoral');
        }
        // Draw rectangle for operation status
        if (AgentInfo[Loop].OpStatus == 0) {
            $('#opStatusTd' + Loop).css('background-color', 'LightGreen');
        } else if (AgentInfo[Loop].OpStatus <= -980 && AgentInfo[Loop].OpStatus >= -989) {
            $('#opStatusTd' + Loop).css('background-color', 'LightGreen');
        } else {
            $('#opStatusTd' + Loop).css('background-color', 'LightCoral');
        }
    }
    $('#agtinfo').append('<button type="button" id="setAgentStatusCommand" class="btn btn-primary disabled" onclick="displayAgentStatusCommandDlg()">' + getClientMessage('AISETSTATUSCMD') + '</button> ');
    $('#agtinfo').append('<button type="button" id="execOpeCommand" class="btn btn-primary disabled" onclick="displayExecCommandDlg()">' + getClientMessage('AIEXECCMD') + '</button> ');
    $('#agtinfo').append('<p></p>');
    $('td').css('vertical-align', 'middle');
}

function getTooltipStr() {
    var tooltipStr = getClientMessage('RESCODE-980') +
                     getClientMessage('RESCODE-981') +
                     getClientMessage('RESCODE-982') +
                     getClientMessage('RESCODE-983') +
                     getClientMessage('RESCODE-984') +
                     getClientMessage('RESCODE-985') +
                     getClientMessage('RESCODE-990') +
                     getClientMessage('RESCODE-991') +
                     getClientMessage('RESCODE-992') +
                     getClientMessage('RESCODE-993') +
                     getClientMessage('RESCODE-994');
    return tooltipStr;
}

function switchAgentInfoButton() {
    var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
    var foundFlag = false;
    for (var loop = 0; AgentInfo != null && loop < AgentInfo.length; loop++) {
        if ($('#agtInfoId' + loop).prop('checked') == true) {
            foundFlag = true;
        }
    }
    if (foundFlag == true) {
        clearRsCommand();
        addRsCommand('', 'icon-checkbox-checked', true);
        addRsCommand('displayAgentStatusCommandDlg()', 'icon-stats-bars', true);
        addRsCommand('displayExecCommandDlg()', 'icon-play', true);
        addRsCommand('', 'icon-bin', true);
        $('#setAgentStatusCommand').removeClass('disabled');
        $('#execOpeCommand').removeClass('disabled');
    } else {
        clearRsCommand();
        if (AgentInfo != null && AgentInfo.length != 0) {
            addRsCommand('', 'icon-checkbox-checked', true);
        } else {
            addRsCommand('', 'icon-checkbox-checked', false);
        }
        addRsCommand('', 'icon-stats-bars', false);
        addRsCommand('', 'icon-play', false);
        addRsCommand('', 'icon-bin', false);
        $('#setAgentStatusCommand').addClass('disabled');
        $('#execOpeCommand').addClass('disabled');
    }
}

function displayExecCommandDlg() {
    var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
    var foundFlag = false;
    for (var loop = 0; loop < AgentInfo.length; loop++) {
        if ($('#agtInfoId' + loop).prop('checked') == true) {
            foundFlag = true;
        }
    }
    if (foundFlag == false) {
        return;
    }

    var commandList = getArray(responseData['API_GET_COMMAND'].Command);

    var execCommandDlg = $('<div/>')

    var btnGrp = $('<div class="btn-group">');
    btnGrp.append('<button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span id="selectedExecCommand">' + getClientMessage('SELCMD') + '</span><span class="caret"></span></button>');
    var ddMenu = $('<ul class="dropdown-menu" role="menu">');
    for (var loop = 0; commandList != null && loop < commandList.length; loop++) {
        ddMenu.append('<li role="presentation"><a onclick="selectExecCommand(' + loop + ')" role="menuitem" tabindex="-1" href="#">' + commandList[loop].Name + '</a></li>');
    }
    btnGrp.append(ddMenu);
    execCommandDlg.append('<p>');
    execCommandDlg.append(getClientMessage('COMMANDLABEL'));
    execCommandDlg.append(btnGrp);
    execCommandDlg.append('</p>');

    execCommandDlg.append('<button type="button" id="OK" class="btn btn-dark" onclick="closeExecCommandDlg(true)">Execute</button> ');
    execCommandDlg.append('<button type="button" id="Cancel" class="btn btn-dark" onclick="closeExecCommandDlg(false)">Cancel</button> ');

    showInputModal('<h5 class="modal-title">' + getClientMessage('SELOPCMD') + '</h5>', execCommandDlg);
}

function closeExecCommandDlg(okFlag) {
    if (okFlag == true && selectedOperationCommand != -1) {
        var commandList = getArray(responseData['API_GET_COMMAND'].Command);
        var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
        for (var loop = 0; loop < AgentInfo.length; loop++) {
            if ($('#agtInfoId' + loop).prop('checked') == true) {
                var ReqObj = { AgentInfo : { Name : AgentInfo[loop].Name, OpCmd : commandList[selectedOperationCommand].Id }};
                apiCall('POST', '/api/agent/', ReqObj, 'API_POST_AGTINFO', null);
            }
        }
        apiCall(null, null, null, '', refreshInfo);
    }
    closeInputModal();
}

function selectExecCommand(execCommand) {
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);
    $('#selectedExecCommand').text(commandList[execCommand].Name);
    selectedOperationCommand = execCommand;
}

function displayAgentStatusCommandDlg() {
    var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
    var foundFlag = false;
    for (var loop = 0; loop < AgentInfo.length; loop++) {
        if ($('#agtInfoId' + loop).prop('checked') == true) {
            foundFlag = true;
        }
    }
    if (foundFlag == false) {
        return;
    }

    var commandList = getArray(responseData['API_GET_COMMAND'].Command);

    var execSaCommandDlg = $('<div/>')

    var btnGrp = $('<div class="btn-group">');
    btnGrp.append('<button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span id="selectedAgentStatus">' + getAgentStatusCommand() + '</span><span class="caret"></span></button>');
    var ddMenu = $('<ul class="dropdown-menu" role="menu">');
    for (var loop = 0; commandList != null && loop < commandList.length; loop++) {
        ddMenu.append('<li role="presentation"><a onclick="selectAgentStatusCommand(' + loop + ')" role="menuitem" tabindex="-1" href="#">' + commandList[loop].Name + '</a></li>');
    }
    btnGrp.append(ddMenu);
    execSaCommandDlg.append('<p>');
    execSaCommandDlg.append(getClientMessage('COMMANDLABEL'));
    execSaCommandDlg.append(btnGrp);
    execSaCommandDlg.append('</p>');

    execSaCommandDlg.append('<button type="button" id="OK" class="btn btn-dark" onclick="closeAgentStatusCommandDlg(true)">OK</button> ');
    execSaCommandDlg.append('<button type="button" id="Cancel" class="btn btn-dark" onclick="closeAgentStatusCommandDlg(false)">Cancel</button> ');

    showInputModal('<h5 class="modal-title">' + getClientMessage('SELSTATUSCMD') + '</h5>', execSaCommandDlg);
}

function closeAgentStatusCommandDlg(okFlag) {
    if (okFlag == true && selectedAgentStatusCommand != -1) {
        var commandList = getArray(responseData['API_GET_COMMAND'].Command);
        var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
        for (var loop = 0; loop < AgentInfo.length; loop++) {
            if ($('#agtInfoId' + loop).prop('checked') == true) {
                var ReqObj = { AgentInfo : { Name : AgentInfo[loop].Name, StatusCmd : commandList[selectedAgentStatusCommand].Id }};
                apiCall('POST', '/api/agent/', ReqObj, 'API_POST_AGTINFO', null);
            }
        }
        apiCall(null, null, null, '', refreshInfo);
    }
    closeInputModal();
}

function getAgentStatusCommand() {
    var AgentInfo = getArray(responseData['API_GET_AGTINFO'].AgentInfo);
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);
    var allSame = true;
    var commandId = -1;
    var commandStr = '';
    for (var loop = 0; loop < AgentInfo.length; loop++) {
        if ($('#agtInfoId' + loop).prop('checked') == true) {
            if (commandId != -1 && AgentInfo[loop].StatusCmd != commandId) {
                allSame = false;
            } else {
                commandId = AgentInfo[loop].StatusCmd;
            }
        }
    }
    if (commandId == -1 || allSame == false) {
        return '';
    } else {
        if (commandList != null) {
            for (var loop = 0; loop < commandList.length; loop++) {
                if (commandId == commandList[loop].Id) {
                    return commandList[loop].Name;
                }
            }
        }
    }
    return '';
}

function selectAgentStatusCommand(agentStatusCommand) {
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);
    $('#selectedAgentStatus').text(commandList[agentStatusCommand].Name);
    selectedAgentStatusCommand = agentStatusCommand;
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function displayServerInfo() {
    $('#svrinfo').append('<h2>' + getClientMessage('SERVERINFO') + '</h2>');
    if (statusCode['API_GET_SVRINFO'] == -1 || statusCode['API_GET_SVRINFO'] == 0) {
        displayAlertDanger('#svrinfo', getClientMessage('CONNERR'));
        return;
    }
    if (svrinfo_msg !== '') {
        displayAlertSuccess('#svrinfo', svrinfo_msg);
        svrinfo_msg = '';
    }
    var StartTimeTbl = $('<table>');
    StartTimeTbl.addClass('table table-striped');

    var tHead = $('<thead>');
    tHead.append('<tr><th>' + getClientMessage('SISTARTTIMEUTC') + '</th><th>' + getClientMessage('SISTARTTIMELOC') + '</th></tr>');
    StartTimeTbl.append(tHead);

    var tBody = $('<tbody>');
    tBody.append('<tr><td>' + responseData['API_GET_SVRINFO'].ServerInfo.StartTimeUtc + '</td><td>' + responseData['API_GET_SVRINFO'].ServerInfo.StartTimeLocal + '</td></tr>');
    StartTimeTbl.append(tBody);

    $('#svrinfo').append('<h4>' + getClientMessage('SISVRVERSION') + responseData['API_GET_SVRINFO'].ServerInfo.Version + '</h4>');
    $('#svrinfo').append(StartTimeTbl);

    // Polling Interval
    if (responseData['API_GET_SVRINFO'].ServerInfo.PollingInterval == 30) {
        selectedPollingInterval = 0;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.PollingInterval == 60) {
        selectedPollingInterval = 1;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.PollingInterval == 300) {
        selectedPollingInterval = 2;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.PollingInterval == 900) {
        selectedPollingInterval = 3;
    }
    var btnGrp = $('<div class="btn-group">');
    btnGrp.append('<button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span id="selectedPI">' + pollingIntervalStr[selectedPollingInterval] + '</span><span class="caret"></span></button>');
    var ddMenu = $('<ul class="dropdown-menu" role="menu">');
    ddMenu.append('<li role="presentation"><a onclick="selectPollingInterval(0)" role="menuitem" tabindex="-1" href="#">' + pollingIntervalStr[0] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectPollingInterval(1)" role="menuitem" tabindex="-1" href="#">' + pollingIntervalStr[1] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectPollingInterval(2)" role="menuitem" tabindex="-1" href="#">' + pollingIntervalStr[2] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectPollingInterval(3)" role="menuitem" tabindex="-1" href="#">' + pollingIntervalStr[3] + '</a></li>');
    btnGrp.append(ddMenu);
    $('#svrinfo').append('<p>');
    $('#svrinfo').append(getClientMessage('SIPOLLINTVL'));
    $('#svrinfo').append(btnGrp);
    $('#svrinfo').append('</p>');

    // Status Acquisition Interval
    if (responseData['API_GET_SVRINFO'].ServerInfo.StatusAcquisitionInterval == 300) {
        selectedStatusAcquisitionInterval = 0;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.StatusAcquisitionInterval == 900) {
        selectedStatusAcquisitionInterval = 1;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.StatusAcquisitionInterval == 1800) {
        selectedStatusAcquisitionInterval = 2;
    } else if (responseData['API_GET_SVRINFO'].ServerInfo.StatusAcquisitionInterval == 3600) {
        selectedStatusAcquisitionInterval = 3;
    }
    var btnGrp = $('<div class="btn-group">');
    btnGrp.append('<button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span id="selectedSAI">' + statusAcquisitionIntervalStr[selectedStatusAcquisitionInterval] + '</span><span class="caret"></span></button>');
    var ddMenu = $('<ul class="dropdown-menu" role="menu">');
    ddMenu.append('<li role="presentation"><a onclick="selectStatusAcquisitionInterval(0)" role="menuitem" tabindex="-1" href="#">' + statusAcquisitionIntervalStr[0] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectStatusAcquisitionInterval(1)" role="menuitem" tabindex="-1" href="#">' + statusAcquisitionIntervalStr[1] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectStatusAcquisitionInterval(2)" role="menuitem" tabindex="-1" href="#">' + statusAcquisitionIntervalStr[2] + '</a></li>');
    ddMenu.append('<li role="presentation"><a onclick="selectStatusAcquisitionInterval(3)" role="menuitem" tabindex="-1" href="#">' + statusAcquisitionIntervalStr[3] + '</a></li>');
    btnGrp.append(ddMenu);

    $('#svrinfo').append('<p>');
    $('#svrinfo').append(getClientMessage('SISTACQINTVL'));
    $('#svrinfo').append(btnGrp);
    $('#svrinfo').append('</p>');

    $('#svrinfo').append('<p>');
    $('#svrinfo').append('<div class="form-group"><label for="bucketPath">' + getClientMessage('SIPATHTOBUCKET') + '</label><input type="text" class="form-control" id="bucketPath" placeholder="Path to bucket"></div>');
    $('#svrinfo').append('</p>');
    $('#bucketPath').val(responseData['API_GET_SVRINFO'].ServerInfo.BucketPath);

    $('#svrinfo').append('<div id="svrinfo_errmsg">');

    $('#svrinfo').append('<p>');
    $('#svrinfo').append('<button type="button" id="serverInfoBtnUpdate" class="btn btn-primary" onclick="updateServerInfo()">' + getClientMessage('SIUPDATEBTN') + '</button> ');
    $('#svrinfo').append('</p>');
    $('td').css('vertical-align', 'middle');
}

function selectPollingInterval(interval) {
    selectedPollingInterval = interval;
    $('#selectedPI').text(pollingIntervalStr[selectedPollingInterval]);
}

function selectStatusAcquisitionInterval(interval) {
    selectedStatusAcquisitionInterval = interval;
    $('#selectedSAI').text(statusAcquisitionIntervalStr[selectedStatusAcquisitionInterval]);
}

function getPollingInterval(interval) {
    if (interval == 0) {
        return 30;
    } else if (interval == 1) {
        return 60;
    } else if (interval == 2) {
        return 300;
    } else if (interval == 3) {
        return 900;
    }
}

function getStatusAcquisitionInterval(interval) {
    if (interval == 0) {
        return 300;
    } else if (interval == 1) {
        return 900;
    } else if (interval == 2) {
        return 1800;
    } else if (interval == 3) {
        return 3600;
    }
}

function updateServerInfo() {
    var pInterval = getPollingInterval(selectedPollingInterval);
    var saInterval = getStatusAcquisitionInterval(selectedStatusAcquisitionInterval);
    apiCall('POST', '/api/server/', {"ServerInfo":{"PInterval":pInterval, "SaInterval":saInterval, "BucketPath":$('#bucketPath').val()}}, 'API_POST_SVRINFO', refreshAfterUpdateServerInfo);
}

function refreshAfterUpdateServerInfo() {
    $('#svrinfo .alert').remove();
    if (statusCode['API_POST_SVRINFO'] == -1 || statusCode['API_POST_SVRINFO'] == 0) {
        displayAlertDanger('#svrinfo_errmsg', getClientMessage('CONNERR'));
        return;
    }
    if (statusCode['API_POST_SVRINFO'] == 400) {
        displayAlertDanger('#svrinfo_errmsg', responseData['API_POST_SVRINFO'].Msg0);
        return;
    }
    refreshInfo();
    svrinfo_msg = getClientMessage('SIUPDATED');
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function displayCommand() {
    $('#command').append('<h2>' + getClientMessage('COMMAND') + '</h2>');
    if (statusCode['API_GET_COMMAND'] == -1 || statusCode['API_GET_COMMAND'] == 0) {
        displayAlertDanger('#command', getClientMessage('CONNERR'));
        return;
    }
    if (command_msg !== '') {
        displayAlertSuccess('#command', command_msg);
        command_msg = '';
    }
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);
    if (commandList == null) {
        $('#command').append(getClientMessage('NOCMDEXIST'));
    }

    selectedCommand = -1;

    if (responseData['API_GET_COMMAND'].Command !== undefined) {
        var commandListTable = $('<table>');
        commandListTable.addClass('table table-striped');

        var tHead = $('<thead>');
        tHead.append('<tr><th>' + getClientMessage('COMNAME') + '</th><th>' + getClientMessage('COMTYPE') + '</th></tr>');
        commandListTable.append(tHead);

        var tBody = $('<tbody>');
        for (var Loop = 0; Loop < commandList.length; Loop++) {
            var typeStr = '';
            if (commandList[Loop].Type == 0) {
                typeStr = 'Linux /usr/bin/bash';
            } else {
                typeStr = 'Windows cmd.exe /c';
            }
            tBody.append('<tr><td><div class="radio"><label><input type="radio" id="radioCom' + commandList[Loop].Id + '" name="optradio" onclick="selectCommand('+ commandList[Loop].Id + ')"/>' + commandList[Loop].Name + '</label></div></td><td>' + typeStr + '</td></tr>');
        }
        commandListTable.append(tBody);
        $('#command').append(commandListTable);
    }

    $('#command').append('<div class="form-group"><label for="commandName">' + getClientMessage('COMNAME') + '</label><input type="text" class="form-control" id="commandName" placeholder="' + getClientMessage('COMNAME') + '"></div>');
    $('#command').append('<div class="form-group"><label for="serverFileName">' + getClientMessage('COMCOPYTOAGT') + '</label><input type="text" class="form-control" id="serverFileName" placeholder="' + getClientMessage('COMPLACESVR') + '"></div>');
    $('#command').append('<div class="form-group"><label for="commandType">' + getClientMessage('COMTYPE') + '</label><select class="form-control" id="commandType"><option>Linux /usr/bin/bash</option><option>Windows cmd.exe /c</option></select></div>');
    $('#command').append('<div class="form-group"><label for="commandScript">' + getClientMessage('COMSCRIPT') + '</label><textarea class="form-control" id="commandScript" rows="3" style="margin-top: 0px; margin-bottom: 0px; height: 185px;"></textarea></div>');
    $('#command').append('<div class="form-group"><label for="agentFileName">' + getClientMessage('COMCOPYTOSVR') + '</label><input type="text" class="form-control" id="agentFileName" placeholder="' + getClientMessage('COMPLACEAGT') + '"></div>');
    $('#command').append('<div id="command_errmsg"/>');
    $('#command').append('<button type="button" id="commandBtnAdd" class="btn btn-primary" onclick="updateCommand(false)">' + getClientMessage('COMADD') + '</button> ');
    $('#command').append('<button type="button" id="commandBtnUpdate" class="btn btn-primary disabled" onclick="updateCommand(true)">' + getClientMessage('COMUPDATE') + '</button> ');
    $('#command').append('<button type="button" id="commandBtnDelete" class="btn btn-primary disabled" onclick="deleteCommand()">' + getClientMessage('COMDELETE') + '</button> ');
    $('#command').append('<p></p>');
    $('td').css('vertical-align', 'middle');
}

function updateCommand(updateFlag) {
    if (updateFlag == true && selectedCommand == -1) {
        return;
    }
    var comType = $("#commandType").val();
    var comTypeInt = -1;
    if (comType === 'Linux /usr/bin/bash') {
        comTypeInt = 0;
    } else if (comType === 'Windows cmd.exe /c') {
        comTypeInt = 1;
    }
    if (updateFlag == false) {
        var ReqObj = { Command : { Name : $("#commandName").val(), Type : comTypeInt, Script : $("#commandScript").val(), ServerFileName : $("#serverFileName").val(), AgentFileName : $("#agentFileName").val() }};
        apiCall('POST', '/api/command/', ReqObj, 'API_POST_COMMAND', refreshAfterAddCommand);
    } else {
        var ReqObj = { Command : { Id : selectedCommand, Name : $("#commandName").val(), Type : comTypeInt, Script : $("#commandScript").val(), ServerFileName : $("#serverFileName").val(), AgentFileName : $("#agentFileName").val() }};
        apiCall('POST', '/api/command/', ReqObj, 'API_POST_COMMAND', refreshAfterUpdateCommand);
    }
}

function deleteCommand() {
    if (selectedCommand == -1) {
        return;
    }
    apiCall('DELETE', '/api/command/' + selectedCommand + '/', null, 'API_DELETE_COMMAND', refreshAfterDeleteCommand);
}

function selectCommand(targetId) {
    var commandList = getArray(responseData['API_GET_COMMAND'].Command);
    selectedCommand = targetId;
    for (loop = 0; loop < commandList.length; loop++) {
        if (commandList[loop].Id == targetId) {
            var typeStr = '';
            if (commandList[loop].Type == 0) {
                typeStr = 'Linux /usr/bin/bash';
            } else {
                typeStr = 'Windows cmd.exe /c';
            }
            $('#commandName').val(commandList[loop].Name);
            $('#serverFileName').val(commandList[loop].ServerFileName);
            $('#commandType').val(typeStr);
            $('#commandScript').val(commandList[loop].Script);
            $('#agentFileName').val(commandList[loop].AgentFileName);
            $('#commandBtnUpdate').removeClass('disabled');
            $('#commandBtnDelete').removeClass('disabled');
        }
    }
}

function refreshAfterAddCommand() {
    $('#command .alert').remove();
    if (statusCode['API_POST_COMMAND'] == -1 || statusCode['API_POST_COMMAND'] == 0) {
        displayAlertDanger('#command_errmsg', getClientMessage('CONNERR'));
        return;
    }
    if (statusCode['API_POST_COMMAND'] == 400) {
        displayAlertDanger('#command_errmsg', responseData['API_POST_COMMAND'].Msg0);
        return;
    }
    refreshInfo();
    command_msg = getClientMessage('COMADDED');
}

function refreshAfterUpdateCommand() {
    $('#command .alert').remove();
    if (statusCode['API_POST_COMMAND'] == -1 || statusCode['API_POST_COMMAND'] == 0) {
        displayAlertDanger('#command_errmsg', getClientMessage('CONNERR'));
        return;
    }
    if (statusCode['API_POST_COMMAND'] == 400) {
        displayAlertDanger('#command_errmsg', responseData['API_POST_COMMAND'].Msg0);
        return;
    }
    refreshInfo();
    command_msg = getClientMessage('COMUPDATED');
}

function refreshAfterDeleteCommand() {
    $('#command .alert').remove();
    if (statusCode['API_DELETE_COMMAND'] == -1 || statusCode['API_DELETE_COMMAND'] == 0) {
        displayAlertDanger('#command_errmsg', getClientMessage('CONNERR'));
        return;
    }
    if (statusCode['API_DELETE_COMMAND'] == 400) {
        displayAlertDanger('#command_errmsg', responseData['API_DELETE_COMMAND'].Msg0);
        return;
    }
    refreshInfo();
    command_msg = getClientMessage('COMDELETED');
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function displayUser() {
    $('#usermgt').append('<h2>' + getClientMessage('USERMGT') + '</h2>');
    if (statusCode['API_GET_USER'] == -1 || statusCode['API_GET_USER'] == 0) {
        displayAlertDanger('#usermgt', getClientMessage('CONNERR'));
        return;
    }
    var userList = getArray(responseData['API_GET_USER'].User);
    if (userList == null) {
        $('#usermgt').append(getClientMessage('NOUSEREXIST'));
    }

    if (responseData['API_GET_USER'].User !== undefined) {
        var userListTable = $('<table>');
        userListTable.addClass('table table-striped');

        var tHead = $('<thead>');
        tHead.append('<tr><th>' + getClientMessage('USERNAME') + '</th><th>' + getClientMessage('USERROLE') + '</th></tr>');
        userListTable.append(tHead);

        var tBody = $('<tbody>');
        for (var Loop = 0; Loop < userList.length; Loop++) {
            var StrUserRole = '';
            if (userList[Loop].Role == 0) {
                StrUserRole = getClientMessage('USERROLEADMIN');
            } else {
                StrUserRole = getClientMessage('USERROLEUSER');
            }
            tBody.append('<tr><td><div class="radio"><label><input type="radio" id="radioUser' + userList[Loop].Id + '" name="optradio" onclick="selectUser(\''+ userList[Loop].Id + '\')"/>' + userList[Loop].Name + '</label></div></td><td>' + StrUserRole + '</td></tr>');
        }
        userListTable.append(tBody);
        $('#usermgt').append(userListTable);
    }
    $('#usermgt').append('<div class="form-group"><label for="userName">' + getClientMessage('USERNAME') + '</label><input type="text" class="form-control" id="userName" placeholder="' + getClientMessage('USERNAME') + '"></div>');
    $('#usermgt').append('<div class="form-group"><label for="userType">' + getClientMessage('USERROLE') + '</label><select class="form-control" id="userRole"><option>' + getClientMessage('USERROLEADMIN') + '</option><option>' + getClientMessage('USERROLEUSER') + '</option></select></div>');
    $('#usermgt').append('<div id="usermgt_errmsg"/>');
    $('#usermgt').append('<button type="button" id="userBtnAdd" class="btn btn-primary" onclick="updateUser(false)">' + getClientMessage('COMADD') + '</button> ');
    $('#usermgt').append('<button type="button" id="userBtnUpdate" class="btn btn-primary disabled" onclick="updateUser(true)">' + getClientMessage('COMUPDATE') + '</button> ');
    $('#usermgt').append('<button type="button" id="userBtnDelete" class="btn btn-primary disabled" onclick="deleteUser()">' + getClientMessage('COMDELETE') + '</button> ');
    $('#usermgt').append('<p></p>');
    $('td').css('vertical-align', 'middle');
}

function updateUser(updateFlag) {
}

function deleteUser() {
}

function selectUser(userId) {
    var userList = getArray(responseData['API_GET_USER'].User);
    selectedUser = userName;
    for (loop = 0; loop < userList.length; loop++) {
        if (userList[loop].Id == userId) {
            var roleStr = '';
            if (userList[loop].Role == 0) {
                roleStr = getClientMessage('USERROLEADMIN');
            } else {
                roleStr = getClientMessage('USERROLEUSER');
            }
            $('#userName').val(userList[loop].Name);
            $('#userRole').val(roleStr);
            $('#userBtnUpdate').removeClass('disabled');
            $('#userBtnDelete').removeClass('disabled');
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function initServal() {
    if (statusCode['API_GET_LANG'] == -1 || statusCode['API_GET_LANG'] == 0) {
        return;
    }
    if (responseData['API_GET_LANG'].ClientLanguage == 'ja') {
        setClientLanguage(1);
    } else {
        setClientLanguage(0);
    }
    showLoginModal(checkLogin);
}

function refreshInfo() {
    $('#agtinfo').empty();
    $('#svrinfo').empty();
    $('#command').empty();
    $('#loginfo').empty();
    $('#usermgt').empty();
    if (userRole == 1) {
        apiCall('GET', '/api/agent/', null, 'API_GET_AGTINFO', displayAgentInfo);
        apiCall('GET', '/api/server/', null, 'API_GET_SVRINFO', displayServerInfo);
        apiCall('GET', '/api/command/', null, 'API_GET_COMMAND', displayCommand);
        apiCall('GET', '/api/log/', null, 'API_GET_LOGS', displayLogInfo);
    } else {
        apiCall('GET', '/api/user/?target=all', null, 'API_GET_USER', displayUser);
    }
}

function activateTopic(id) {
    refreshInfo();
    $('#agtinfo').css('display', 'none');
    $('#svrinfo').css('display', 'none');
    $('#command').css('display', 'none');
    $('#loginfo').css('display', 'none');
    $('#usermgt').css('display', 'none');

    var activateTarget = document.getElementById(id);
    activateTarget.style.display = 'block'

    clearRsCommand();
    if (id === 'agtinfo') {
        switchAgentInfoButton();
    }
}

function checkLogin(dummyId, dummyPw) {
    setAuthenticationToken(dummyId + ' ' + dummyPw);
    apiCall('GET', '/api/user/', null, 'API_GET_USER', checkLoginAfterApiCall);
}

function checkLoginAfterApiCall() {
    if (statusCode['API_GET_USER'] == -1 || statusCode['API_GET_USER'] == 0) {
        setLoginResult(2);
        return;
    } else if (statusCode['API_GET_USER'] != 200) {
        setLoginResult(1);
        return;
    } else {
        var contents = [
            { id : 'agtinfo', actApiName : 'activateTopic', title : 'Agent Info' },
            { id : 'svrinfo', actApiName : 'activateTopic', title : 'Server Info' },
            { id : 'command', actApiName : 'activateTopic', title : 'Command' },
            { id : 'loginfo', actApiName : 'activateTopic', title : 'Audit Log' },
            { id : 'usermgt', actApiName : 'activateTopic', title : 'User Management' }
        ];
        initMainPage('SERVAL', 'squirrel.svg', contents);
        userRole = responseData['API_GET_USER'].User.Role;
        if (userRole == 1) {
            $('#menu-agtinfo').show();
            $('#menu-svrinfo').show();
            $('#menu-command').show();
            $('#menu-loginfo').show();
        } else {
            $('#menu-usermgt').show();
        }
        refreshInfo();
        setLoginResult(0);
        return;
    }
}

window.onload = function() {
    initClientMessage();
    apiCall('GET', '/api/language/', null, 'API_GET_LANG', initServal);
}

