#pragma once
#include "..\..\..\YaizuComLib\src\stkwebapp\StkWebAppExec.h"

class Sample_Elem3 : StkWebAppExec
{
public:
	static BOOL TermFlag;

	StkObject* Execute(StkObject*, int, TCHAR[128], int*);
};
