SystemUtil.Run "C:\Program Files\Internet Explorer\iexplore.exe","http://computer-database.herokuapp.com/computers"
On error resume next
LinkCheck = Browser("Computers database").Page("Computers database").Link("Play sample application").Exist(5)

If err.number<> 0  Then
Reporter.ReportEvent micFail,Step1, "Page did not load proeperly"
Else

Browser("Computers database").Page("Computers database").WebEdit("searchBox").Set "Acer" @@ hightlight id_;_Browser("Computers database").Page("Computers database").WebEdit("f")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Computers database").Page("Computers database").WebButton("Filter by name").Click @@ hightlight id_;_Browser("Computers database").Page("Computers database 2").Link("ACE")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Computers database").Page("Computers database").WebTable("Computer name").ChildItem(2,1,"Link",0).Click
Browser("Computers database").Page("Computers database_3").WebEdit("introduced").Set "2015-01-01" @@ hightlight id_;_Browser("Computers database").Page("Computers database 3").WebEdit("introduced")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Computers database").Page("Computers database_3").WebEdit("discontinued").Set "2017-01-01" @@ hightlight id_;_Browser("Computers database").Page("Computers database 3").WebEdit("discontinued")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Computers database").Page("Computers database_3").WebList("company").Select "IBM" @@ hightlight id_;_Browser("Computers database").Page("Computers database 3").WebList("company")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Computers database").Page("Computers database_3").WebButton("Save this computer").Click



	If Browser("Computers database").Page("Computers database").WebElement("Done!").Exist = True Then
	
	     Reporter.ReportEvent micpass,"ComDb_Update_01", "Computer has been succesfully updated."
	Else @@ hightlight id_;_Browser("Computers database").Page("Computers database 3").WebButton("Save this computer")_;_script infofile_;_ZIP::ssf8.xml_;_
		
        Reporter.ReportEvent micfail,"ComDb_Update_01", "Computer is not succesfully updated"
	End if

End if

Browser("Computers database").Close 

